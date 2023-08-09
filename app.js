const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    fs.readFile("./pages/index.html", "utf8", (err, content) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else if (url === "/about") {
    fs.readFile("./pages/about.html", "utf8", (err, content) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else if (url === "/contact") {
    fs.readFile(".pages/contact.html", "utf8", (err, content) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else {
    fs.readFile("./pages/404.html", "utf8", (err, content) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
