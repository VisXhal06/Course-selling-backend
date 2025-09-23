const express = require('express');
const app = express();

app.post("user/signup", function(req, res) {
    res.json({
        message: "User signed up successfully"
    })
})

app.post("user/signin", function(req, res) {
    res.json({
        message: "User signed in successfully"
    })
})

app.get("user/purchases", function(req, res) {
    res.json({
        message: "Purchase completed successfully"
    })
})

app.post("course/purchase", function(req, res) {
    res.json({
        message: "Purchase completed successfully"
    })
})


app.get("/courses", function(req, res) {
    res.json({
        message: "List of courses"
    })
})


app.listen(3000);