const models = require("../models");

function increseCount(cur, incre) {
  cur += incre;
  return cur;
}

exports.get_testAPI = function (req, res, next) {
  res.json({
    count: 10,
  });
};

exports.post_testAPI = function (req, res, next) {
  // NOTE input
  let cur = parseInt(request.body.current);
  let incre = parseInt(request.body.increment);

  //NOTE output
  response.json({ count: increseCount(cur, incre) });
};

exports.post_testSubmit = function (request, response, next) {
  let _email = request.body.submit_email;
  // response.json({ result: _email });

  return models.Lead.create({
    email: _email,
  });
};

exports.show_testSubmit = function (req, res, next) {
  return models.Lead.findAll().then((leads) => {
    res.json({ leads: leads });
  });
};
