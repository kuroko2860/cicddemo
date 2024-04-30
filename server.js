// Import thư viện Express
const express = require("express");

// Tạo ứng dụng Express
const app = express();

// Định nghĩa route cho trang chủ
app.get("/", (req, res) => {
  res.send("Hello, World! This is my first Express server.");
});

// Lắng nghe các kết nối đến cổng 8080
app.listen(8080, () => {
  console.log("Server is running at http://localhost:8080/");
});