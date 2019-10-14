const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 1997;

app.use(bodyParser.json());
const { movieRouter, catRouter, conRouter } = require("./routers");
app.use(`/movie`, movieRouter);
app.use(`/cate`, catRouter);
app.use(`/conn`, conRouter);
app.listen(port, () => console.log("API aktif di port " + port));
