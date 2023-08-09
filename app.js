const express = require("express");
const app = express();
const path = require("path");

// Define the path to the static files directory
app.use(express.static(path.join(__dirname, "public")));

// Define routes for different pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "./pages/contact.html"));
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./pages/404.html"));
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
