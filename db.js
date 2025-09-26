const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    password: String,
    isAdmin: Boolean,
    purchasedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
})

const adminSchema = new Schema({
    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    password: String, 
    isAdmin: Boolean
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    creatorId: { type: Schema.Types.ObjectId, ref: 'Admin' },
    published: Boolean
})

const purchaseSchema = new Schema({ 
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
    purchaseDate: { type: Date, default: Date.now }
})

const usermodel = mongoose.model("user", userSchema);
const adminmodel = mongoose.model("admin", adminSchema);
const coursemode = mongoose.model("course", courseSchema);
const purchasemodel = mongoose.model("purchase", purchaseSchema);

module.export = {
    usermodel,
    adminmodel,
    coursemode,
    purchasemodel
}