const express = require("express");
const app = express();
const path = require("path");

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Serve the custom font file
app.get("/La_Beauties.woff2", function (req, res) {
  res.sendFile(path.join(__dirname, "La_Beauties.woff2"));
});

// Serve the custom font file
app.get("/Magnolia_Regular.woff2", function (req, res) {
  res.sendFile(path.join(__dirname, "Magnolia_Regular.woff2"));
});

// Start the server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
