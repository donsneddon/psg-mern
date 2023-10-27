const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
const corsOptions = {
    //origin: "http://localhost:3000" // frontend URI (ReactJS)
    origin: "https://psg-mern-frontend.onrender.com",
    //52.41.36.82,
    //54.191.253.12,
    //44.226.122.3
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});