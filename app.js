const { json } = require("express");
const express = require("express");
const app = express();

require("dotenv").config();
 app.use(json());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to the users list");
};

app.get("/", welcome);

const userHandlers = require("./userHandlers");

app.post("/api/users", userHandlers.postUser);

app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);

const movieHandlers = require("./movieHandlers");

app.post("/api/movies", movieHandlers.postMovie);

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});