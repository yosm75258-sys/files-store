const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<title>متجر فايلز</title>
<style>
body {
  font-family: Arial;
  background: linear-gradient(#4facfe,#00f2fe);
  text-align: center;
  padding: 40px;
  color: #333;
}
.store {
  background: white;
  padding: 25px;
  border-radius: 15px;
  max-width: 350px;
  margin: auto;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
button {
  background: #4facfe;
  color: white;
  border: none;
  padding: 14px 25px;
  font-size: 16px;
  border-radius: 8px;
}
</style>
</head>
<body>

<div class="store">
<h1>🛒 متجر فايلز</h1>
<h2>كتاب إلكتروني</h2>
<p>تعلم من الصفر بأسلوب بسيط</p>
<p><strong>السعر: 10$</strong></p>
<a href="/buy"><button>شراء الآن</button></a>
</div>

</body>
</html>
`);
});

app.get("/buy", (req, res) => {
  res.send(`
    <h2>✅ تم الشراء بنجاح (تجربة)</h2>
    <p>اضغط لتحميل الملف</p>
    <a href="/download"><button>تحميل</button></a>
  `);
});

app.get("/download", (req, res) => {
  res.send("📥 هنا سيتم تحميل الملف الحقيقي لاحقًا");
});

app.listen(PORT, () => {
  console.log("Server running");
});
