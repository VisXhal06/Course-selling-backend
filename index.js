const express = require('express');
const mongoose = require('mongoose');

const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin'); 
const { courseRouter } = require('./routes/course');
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    await mongoose.connect("mongodb+srv://vishalsuthar2711:2UmnKK0r9x68ShcY@cluster0.3e4mogg.mongodb.net/Course-app")
    app.listen(3000);
    console.log("Server is listening on port 3000");
}

main();