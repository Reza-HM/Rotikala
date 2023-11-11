// server.js

const jsonServer = require("json-server");

const server = jsonServer.create();

// Your middleware
const { products, articles } = "db.json";

server.use("/search", (req, res) => {
  const { q } = req.query;

  const productResults = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(q.toLowerCase()) ||
      product.body.toLowerCase().includes(q.toLowerCase())
    );
  });

  const articleResults = articles.filter((article) => {
    return (
      article.title.toLowerCase().includes(q.toLowerCase()) ||
      article.body.toLowerCase().includes(q.toLowerCase())
    );
  });

  const results = [...productResults, ...articleResults];

  db.search = results;

  res.json(results);
});

const router = jsonServer.router("/data/db.json");
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
