const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  servePage(url, res);
});

function servePage(url, res) {
  let fileName = "";

  switch (url) {
    case "/":
      fileName = "index.html";
      break;
    case "/about":
      fileName = "about.html";
      break;
    case "/contact":
      fileName = "contact.html";
      break;
    default:
      fileName = "404.html";
      break;
  }

  fs.readFile(fileName, "utf8", (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
}

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
