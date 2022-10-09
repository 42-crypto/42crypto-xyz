const express = require("express");
const app = express();
const axios = require('axios');

app.get("/", function(req, res) {
  (async () => {
    const token = "Bearer " + process.env.NOTION_KEY;

    const membersData = await axios.post('https://api.notion.com/v1/databases/f227cb3970aa47718bd5461296a2c1db/query',{}, {
      headers: {
        'Authorization': token,
        'Notion-Version': '2022-06-28',
        "Content-Type": "application/json"
      },
    })
    const membersResults = membersData.data.results;
    const members = membersResults.map(item => item.properties);

    const worksData = await axios.post('https://api.notion.com/v1/databases/6c073514b6d642aa875f429346ce5697/query',{}, {
      headers: {
        'Authorization': token,
        'Notion-Version': '2022-06-28',
        "Content-Type": "application/json"
      },
    })
    const worksResults = worksData.data.results;
    const works = worksResults.map(item => item.properties);

    res.send({members: members, works: works});
  })();
});

module.exports = app;