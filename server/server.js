const createError = require('http-errors');
const express = require("express");
const bodyParser = require("body-parser");
const port = 4000;
const app = express();

const testAPIRouter = require('./routes/testAPI');

app.use(bodyParser.json());
app.use('/', testAPIRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port, () => {
  console.log(`API available at http://localhost:${port}/api`);
});
