import express from "express";
import routing from "./routes/Routing.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hey! Hi i'm alive");
});

app.use("/user", routing);

