const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>متجر فايلز</title>
        <style>
          body {
            font-family: Arial;
            background: #f5f5f5;
            text-align: center;
            padding: 40px;
          }
          .card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            max-width: 300px;
            margin: auto;
            box-shadow: 0 0 10px #ccc;
          }
          button {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <h1>🛒 متجر فايلز</h1>
        <div class="card">
          <h2>كتاب إلكتروني</h2>
          <p>السعر: 10$</p>
          <button>شراء الآن</button>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running");
});
