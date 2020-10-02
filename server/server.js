const express = require("express");
const bodyParser = require("body-parser");
const port = 4000;
const app = express();

function increseCount(cur, incre) {
  cur += incre;
  return cur;
}

// NOTE must use bodyParser to compile JSON format data
app.use(bodyParser.json());

app.get("/api/count", (req, res) => {
  res.json({
    count: 10,
  });
});

app.post("/api/increment", (request, response) => {
  // NOTE input
  let cur = parseInt(request.body.current);
  let incre = parseInt(request.body.increment);

  //NOTE output
  response.json({ count: increseCount(cur, incre) });
});

app.listen(port, () => {
  console.log(`API available at http://localhost:${port}/api`);
});
