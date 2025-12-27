const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// الصفحة الرئيسية (المتجر)
app.get("/", (req, res) => {
  res.send(`
  <html lang="ar">
  <head>
    <meta charset="UTF-8">
    <title>متجر فايلز</title>
    <style>
      body {
        font-family: Arial;
        background: #f2f2f2;
        text-align: center;
        padding: 40px;
      }
      .card {
        background: white;
        padding: 20px;
        border-radius: 10px;
        max-width: 320px;
        margin: auto;
        box-shadow: 0 0 10px #ccc;
      }
      button {
        background: green;
        color: white;
        border: none;
        padding: 12px 20px;
        font-size: 16px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <h1>🛒 متجر فايلز</h1>
    <div class="card">
      <h2>كتاب إلكتروني</h2>
      <p>شرح مبسط – مناسب للمبتدئين</p>
      <p><strong>السعر: 10$</strong></p>
      <a href="/buy">
        <button>شراء الآن</button>
      </a>
    </div>
  </body>
  </html>
  `);
});

// صفحة الشراء (محاكاة)
app.get("/buy", (req, res) => {
  res.send(`
    <h2>✅ تم الشراء بنجاح</h2>
    <p>اضغط للتحميل</p>
    <a href="/download">
      <button>تحميل الملف</button>
    </a>
  `);
});

// تحميل الملف (تجريبي)
app.get("/download", (req, res) => {
  res.send("📥 هنا سيتم تحميل الملف الحقيقي لاحقًا");
});

app.listen(PORT, () => {
  console.log("Server running");
});
