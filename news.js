const express = require("express");
const axios = require("axios");
const newsr = express.Router();
const moment = require("moment");
const math = require("math");

newsr.get("/:id/:page", async (req, res) => {
  const id = req.params.id;
  const page = req.params.page;
  try {
    var url = `http://newsapi.org/v2/everything?q=${id}&pageSize=${page}&language=en&apiKey=f1a0b35637594c8fbdafccea17b09bcf`;
    // "http://newsapi.org/v2/top-headlines?" +
    // "country=in&" +
    // "apiKey=f1a0b35637594c8fbdafccea17b09bcf";

    const news_get = await axios.get(url);
    res.json({ articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
  console.log(id);
});

module.exports = newsr;
