const express = require("express");
const app = express();
const axios = require('axios');

app.get("/", function(req, res) {
  (async () => {
    const token = "Bearer " + process.env.NOTION_KEY;
    const data = await axios.post('https://api.notion.com/v1/databases/f227cb3970aa47718bd5461296a2c1db/query',{}, {
      headers: {
        'Authorization': token,
        'Notion-Version': '2022-06-28',
        "Content-Type": "application/json"
      },
    })
    const results = data.data.results;
    const members = results.map(item => item.properties);
    res.send(members);
  })();
});

module.exports = app;