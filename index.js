const express = require("express");
const app = express();

app.post("/", (req, res) => {
    res.send("Done");
});

const port = process.env.PORT || 3001;

app.listen(port, "0.0.0.0", () => console.log(`Running on port ${port}`));