const express = require("express");
const grocery_route = require("./routes/grocery_route");
const errorController = require("./controllers/error");
const app = express();
//use .env in real life and put port value there ,this is just an example
port = 5000;

app.use(express.json()); //This parses the requests into the JSON format

// in production change the asterix to the server domain so we don't have a CORS issue
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Control what requests can client make
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/groceries", grocery_route);

// If client wants to visit any other directory that does not exists,then send this message
app.get("*", (req, res, next) => {
  res.status(404).send("Path does not exist");
  next();
});

//always put the error controllers at the bottom, why? because if something goes wrong with the middlewares above then we catch them below
app.use(errorController.handleError);

app.listen(port, () => console.log("Listening to port 5000"));
