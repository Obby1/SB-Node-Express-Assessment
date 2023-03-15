const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require("./expressError")

// Use middleware to parse JSON from incoming requests
app.use(express.json());

// Accepts array of developer(s), on post, sends get request to github api
app.post('/', async function(req, res, next) {
  try {
    // returns an array of resolved promises
    let results = await Promise.all(
      // for each username in the body sent get request to github
      req.body.developers.map(async dev => {
        const response = await axios.get(`https://api.github.com/users/${dev}`);
        return response.data;
      })
    );
    // save results to gitUsers and return as JSON
    let gitUsers = results.map(dev => ({ name: dev.name, bio: dev.bio }));
    return res.send(JSON.stringify(gitUsers));
  } catch (err) {
    next(err);
  }
});

// 404 handler
app.use(function (req, res, next) {
  next(new ExpressError("Not Found", 404));
}); 

// general error handler

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});


module.exports = app;
