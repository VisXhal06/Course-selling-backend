const { Router } = require('express');
const courseRouter = Router();
        
courseRouter.post("course/purchase", function(req, res) {
    res.json({
        message: "Purchase completed successfully"
    })
})


courseRouter.get("/courses/bunk", function(req, res) {
    res.json({
        message: "List of courses"
    })
})


module.exports = {
    courseRouter: courseRouter
}