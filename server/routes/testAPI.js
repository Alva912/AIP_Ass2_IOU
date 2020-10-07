var express = require("express");
var router = express.Router();

function increseCount(cur, incre) {
  cur += incre;
  return cur;
}

// router.get("/api", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/api/count", (req, res, next) => {
  res.json({
    count: 10,
  });
});

router.post("/api/increment", (request, response, next) => {
  // NOTE input
  let cur = parseInt(request.body.current);
  let incre = parseInt(request.body.increment);

  //NOTE output
  response.json({ count: increseCount(cur, incre) });
});

module.exports = router;
