const { Router } = require('express');
const adminRouter = Router();

adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "Admin signed up successfully"
    })
}
)

adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "Admin signed in successfully"
    })
}
)

adminRouter.post("/create-course", function(req, res) {
    res.json({
        message: "Course created successfully"
    })
})

adminRouter.post("/delete-course", function(req, res) {
    res.json({
        message: "Course deleted successfully"
    })
}
)

adminRouter.post("/course/bulk", function(req, res) {
    res.json({
        message: "Course generated successfully"
    })
}
)

adminRouter.get("/all-users", function(req, res) {
    res.json({
        message: "List of all users"
    })
}
)
module.exports = {
    adminRouter: adminRouter
}