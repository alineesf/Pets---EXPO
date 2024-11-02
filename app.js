require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const upload = require('./UploadConfig');

const mongoURL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use('/uploads', express.static('uploads'));
mongoose
    .connect(mongoURL)
    .then(() => {
        console.log("Database Connect!");
    })
    .catch((e) => {
        console.log(e);
    });

require('./UserDetails');
const User = mongoose.model("UserInfo");

app.get("/", (req, res) => {
    res.send({ status: "Started" });
});

app.post('/SignUpForm', upload.single('profileImage'), async (req, res) => {
    console.log("Dados recebidos:", req.body);
    const { username, email, telephone, password, birthday } = req.body; // Incluindo birthday
    const profileImage = req.file ? req.file.path : null;

    if (!username || !email || !telephone || !password || !birthday) {
        return res.status(400).send({ status: "error", data: "Por favor, preencha todos os campos obrigatórios." });
    }

    try {
        const oldUser = await User.findOne({ email: email });
        if (oldUser) {
            return res.status(409).send({ status: "error", data: "Usuário já existe!" });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        await User.create({
            username,
            email,
            telephone,
            password: encryptedPassword,
            profileImage,
            birthday // Adicionando birthday ao documento do usuário
        });

        res.status(201).send({ status: "ok", data: "Usuário criado com sucesso!" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send({ status: "error", data: "Ocorreu um erro ao criar o usuário. Tente novamente." });
    }
});

app.post("/LoginForm", async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const oldUser = await User.findOne({ email: email });

    if (!oldUser) {
        return res.send({ data: "Usuário não existe" });
    }

    if (await bcrypt.compare(password, oldUser.password)) {
        const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);
        console.log(token);

        return res.send({
            status: "ok",
            data: token,
            userType: oldUser.userType,
        });
    } else {
        return res.send({ error: "error" });
    }
});

app.post("/userdata", async (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;

        User.findOne({ email: useremail }).then((data) => {
            return res.send({ status: "ok", data: data });
        });
    } catch (error) {
        return res.send({ error: error });
    }
});

app.listen(PORT, () => {
    console.log(`Node Js server started on port ${PORT}!`);
});
