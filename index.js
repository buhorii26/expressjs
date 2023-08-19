//express js
const express = require("express");
const app = express();

//express js layout
const expressLayouts = require("express-ejs-layouts");

//set up express js layout
app.use(expressLayouts);

//server port on 3000
const port = 3000;

//menggunakan EJS Template Engine
app.set("view engine", "ejs");

//menampilkan halaman Home
app.get("/", (req, res) => {
  const cats = [
    {
      nama: "Shiro",
      ras: "Persia",
    },
    {
      nama: "Aoi",
      ras: "Burma",
    },
    {
      nama: "Hana",
      ras: "Balinese",
    },
  ];
  res.render("home", { nama: "bori", layout: "layouts/main", title: "Home", cats });
});

//code untuk menampilkan halaman routes about
app.get("/about", (req, res) => {
  res.render("about", { layout: "layouts/main", title: "About", });
});

//code untuk menampilkan halaman routes angora
app.get("/ragdoll", (req, res) => {
  res.render("ragdoll", { layout: "layouts/main", title: "Ragdoll", });
});
//code untuk menampilkan halaman routes persia
app.get("/persia", (req, res) => {
  res.render("persia", { layout: "layouts/main", title: "Persia", });
});

//code untuk menampilkan halaman routes persia
app.get("/maine-coon", (req, res) => {
  res.render("maine-coon", { layout: "layouts/main", title: "Maine Coon", });
});
//code untuk menampilkan halaman routes cats & melakukan query string pada halaman produk
app.get("/cats/:id", (req, res) => {
  res.send(
    `Cats ID :  ${req.params.id} <br> Category Cats : ${req.query.category}`
  );
});

//code untuk menampilkan halaman routes contact
app.get("/contact", (request, res) => {
  res.render("contact", { layout: "layouts/main", title: "Contact", });
});

//menambahkan paramater routes contohnya domain.com/blog/judul-blog secara dinamis
//code untuk menampilkan halaman routes contact
app.get("/blog", (req, res) => {
  res.render("blog", { layout: "layouts/main", title: "Blog" });
});
app.get("/blog/:judul", (req, res) => {
  const { judul } = req.params; //mengambil judul secara dinamis
  res.send(`kita sedang di halaman dengan judul: ${judul}`);
});

app.get("/search", (req, res) => {
  // console.log(request.query);
  const { q } = req.query;
  if (!q) {
    res.send(`<h1>tidak ada data yg dicari</h1>`);
  }
  res.send(`<h1>Search keywords: ${q} </h1`);
});

//menambahkan paramater routes contohnya domain.com/blog/category/:title/:author secara dinamis
app.get("/blog/:category/:title/:author", (req, res) => {
  const { category, title, author } = req.params; //mengambil judul secara dinamis
  res.send(`Blog kategori: ${category}| Judul: ${title}| Penulis: ${author}`);
});

//ini adalah halaman untuk menampilkan 404 not found code paling bawah
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 not found</h1>");
});

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}/`);
});
