require("dotenv").config();

const express = require("express");
const app = express();
const Port = process.env.PORT || 5000;

const periodicRouter = require("./server/Controllers/routes")
//Middleware

app.use(express.json())

/**
 * Database for Periodic Table of elements
 */
app.use("/elements", periodicRouter)

/**
 * Database for second db
 */

app.listen(Port, console.log(`Listening on Port: ${Port}`));