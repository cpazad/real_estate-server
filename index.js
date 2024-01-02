const express = require("express");
const app = express();
const cors = require("cors");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// server route

app.get("/", (req, res) => {
    res.send("real estate is in business");
  });
  
  app.listen(port, () => {
    console.log(`Real Estate is open at port ${port}`);
  });