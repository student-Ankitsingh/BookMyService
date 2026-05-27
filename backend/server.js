import express from "express";
import dotenv from "dotenv"
import ConnectDb from "./DB/db.js";
import authRoutes from "./Routes/authRoutes.js"

dotenv.config();
ConnectDb();

const app = express();

app.use(express.json())

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})