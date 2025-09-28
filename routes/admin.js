const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "Vishal0604";

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

adminRouter.post("/create-course", function (req, res) {
  res.json({
    message: "Course created successfully",
  });
});

adminRouter.post("/delete-course", function (req, res) {
  res.json({
    message: "Course deleted successfully",
  });
});

adminRouter.post("/course/bulk", function (req, res) {
  res.json({
    message: "Course generated successfully",
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
