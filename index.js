const express = require("express");

const router = require("./router");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/items", router);

app.use((_req, _res, next) => {
  const error = new Error("Invalid! Path not found!");
  error.status = 404;
  return next(error);
});

app.use((error, _req, res, _next) => {
  console.error(error);
  return res
    .status(error.status || 500)
    .json({ success: false, error: error.message || "Server error!" });
});

app.listen(port, () => console.info(`Server running at port: ${port}`));

module.exports = app;
