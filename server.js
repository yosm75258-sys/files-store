const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// المنتجات
const products = [
  { id: 1, name: "كتاب إلكتروني", price: "10$", desc: "تعلم الأساسيات" },
  { id: 2, name: "دورة فيديو", price: "25$", desc: "شرح عملي كامل" },
  { id: 3, name: "قوالب جاهزة", price: "15$", desc: "ملفات احترافية" }
];

// صفحة المتجر
app.get("/", (req, res) => {
  let html = `
  <html lang="ar">
  <head>
    <meta charset="UTF-8">
    <title>متجر فايلز</title>
    <style>
      body {
        font-family: Arial;
        background: #f2f2f2;
        text-align: center;
        padding: 30px;
      }
      .product {
        background: white;
        margin: 15px auto;
        padding: 20px;
        border-radius: 10px;
        max-width: 350px;
        box-shadow: 0 0 10px #ccc;
      }
      button {
        background: green;
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
  `;

  products.forEach(p => {
    html += `
      <div class="product">
        <h2>${p.name}</h2>
        <p>${p.desc}</p>
        <p><strong>السعر: ${p.price}</strong></p>
        <a href="/buy/${p.id}">
          <button>شراء الآن</button>
        </a>
      </div>
    `;
  });

  html += `
  </body>
  </html>
  `;

  res.send(html);
});

// صفحة الشراء
app.get("/buy/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.send("❌ المنتج غير موجود");

  res.send(`
    <h2>✅ شراء: ${product.name}</h2>
    <p>السعر: ${product.price}</p>
    <a href="/download/${product.id}">
      <button>تحميل المنتج</button>
    </a>
  `);
});

// صفحة التحميل (تجريبية)
app.get("/download/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.send("❌ المنتج غير موجود");

  res.send(`📥 سيتم تحميل (${product.name}) هنا`);
});

app.listen(PORT, () => {
  console.log("Server running");
});
