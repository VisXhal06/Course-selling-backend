const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");

const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } =  require("../config");
const { adminMidlleware } = require("../middleware/admin");
const course = require("./course");

adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  await adminModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    message: "User signed up successfully",
  });
});

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Admin not found",
    });
  }
});

adminRouter.post("/course", adminMidlleware,function (req, res) {
  const adminId = req.adminId;
  const { title, description, price, imageLink, published } = req.body;

  courseModel.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    published: published,
    creatorId: adminId,  
  });

  res.json({
    message: "Course created successfully",
    courseId: course._id
  });
});

adminRouter.put("/course/update", adminMidlleware, async function (req, res) {
  const adminId = req.adminId;
  const { title, description, price, imageLink, published, courseId } = req.body;

  const course = await courseModel.updateOne({
      _id: courseId,
      createorId: adminId 
  }, {
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,  
  });

  res.json({
    message: "Course Updated",
    courseId: course._id
  });
});

adminRouter.get("/course/bulk", adminMidlleware, async function (req, res) {
  
  const adminId = req.userId
  const courses = await courseModel.find({
      createorId: adminId 
  });

  res.json({
    message: "Course Updated",
    courses
  });
});

adminRouter.get("/all-users", function (req, res) {
  res.json({
    message: "List of all users",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
