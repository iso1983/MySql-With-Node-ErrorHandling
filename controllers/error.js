exports.handleError = (err, req, res, next) => {

  console.log(err);
  if (err.statusCode == 404) {
    res.statusCode(404).send("Page not found");
  } else if (err.statusCode == 403) {
    res.status(403).send("Forbidden");
  } else {
    res.status(500).send("Internal error 500");
  }

  next(err);
};
