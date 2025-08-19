import express from "express";

const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
    res.send("Hello Siddharth JHA");
});

app.get("/About", (req, res) => {
    res.send("Hello ")
})
// Start the server on port 5001
app.listen(PORT, () => {   
    console.log(`Server has listening on : http://localhost:${PORT}`);
});