import express from "express";
import routing from "./routes/Routing.js";
import { connectDB } from "./config/db.js";
import { tokenRateLimiter } from "./tokenRateLimiter.js";

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
app.use(tokenRateLimiter); //Use it Globally.
//Optimisation: Use it on specific routes only. like below
//For Login and Signup routes, we can use less token recharge. (small bucket size)
// For Products, we can use more tokens. (Large bucket size)

app.use("/user", routing);

