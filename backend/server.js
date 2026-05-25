import express from "express";
import dotenv from "dotenv"
import ConnectDb from "./DB/db.js";

dotenv.config();
ConnectDb();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Ankit Singh")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})