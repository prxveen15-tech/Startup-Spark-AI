const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Startup Spark AI Backend Running 🚀");
});

app.post("/generate", (req, res) => {

    const { idea } = req.body;

    res.json({

        name: "Startup Spark AI",

        problem: idea,

        solution: "AI generated solution for your startup.",

        revenue: "Subscription Model",

        users: "Students & Entrepreneurs",

        tech: "HTML, CSS, JavaScript, Node.js"

    });

});

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});