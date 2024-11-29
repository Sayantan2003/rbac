import mongoose  from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/rbac");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    gender: String,
    role: String,
    address: String,
    password: String 
});

export default mongoose.model("user", userSchema);