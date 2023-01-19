const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const moment = require("moment");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const newsRoute = require("./routes/news.js");

const corsOptions = {
  origin: "http://localhost:8000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.locals.moment = moment;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

app.use("/", newsRoute);

app.listen(port, () => console.log("started"));
