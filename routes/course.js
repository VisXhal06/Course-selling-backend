const { Router } = require('express');
const courseRouter = Router();
        
courseRouter.post("/purchase", function(req, res) {
    res.json({
        message: "Purchase completed successfully"
    })
})


courseRouter.get("/preview", function(req, res) {
    res.json({
        message: "List of courses"
    })
})


module.exports = {
    courseRouter: courseRouter
}