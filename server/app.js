import express from 'express';
// import multer from 'multer';
const app = express();
import cors from 'cors';
app.use(cors());
import userModel from "./models/user.js"
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render("/");
});

app.post("/register", async (req, res) => {
    let { name, email, phone, gender, role, address, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(401).json("Something went wrong");

    try {

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                let user = await userModel.create({
                    name,
                    email,
                    phone,
                    gender,
                    role,
                    address,
                    password: hash,
                });
    
                let token = jwt.sign({ email: email, userid: user._id }, "Sayantan");
                res.cookie("token", token, { httpOnly: true });
                res.status(200).json({ message: "Registration Successful" });
            });
        });
    } catch (error) {
        res.status(500).json("Something went wrong"), error;
    }
});

app.post("/login", async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) return res.status(401).json("Something went wrong");

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: email, userid: user._id }, "Sayantan");
            res.cookie("token", token, { httpOnly: true });
            res.status(200).json({ message: "Login Successful" });
        }
        else res.status(401).json({ message: "Something went wrong" });
    });
});

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '../uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });
// const upload = multer({ storage: storage });

app.get("/dashboard", isLoggedIn, (req, res) => {
    res.render("dashboard");
})

app.get("/logout", (req, res) => {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.cookies.token === "") res.redirect("/");
    else {
        let data = jwt.verify(req.cookies.token, "Sayantan");
        req.user = data;
        next();
    }
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => console.log("Server started"));