import express from "express";
import routing from "./routes/Routing.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hey! Hi i'm alive");
});

//Middleware
app.use(express.json());

app.use("/user", routing);

