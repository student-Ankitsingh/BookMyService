import express from "express";
import dotenv from "dotenv"
import ConnectDb from "./DB/db.js";
import cors from "cors"
import authRoutes from "./Routes/authRoutes.js"
import serviceRoutes from "./Routes/serviceRoutes.js"

dotenv.config();
ConnectDb();

const app = express();

app.use(express.json())
app.use(cors())

app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})