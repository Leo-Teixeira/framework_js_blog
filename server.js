import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import http from "http";
import cors from "cors";
import { articleRoutes } from "./routes/articles.js";
import { commentRoutes } from "./routes/comments.js";
import { connectDB } from "./config.js";

const app = express();
const server = http.createServer(app);

// Middleware
/* `app.use(express.json())` is middleware that parses incoming requests with JSON payloads. It allows
the server to receive JSON data in the request body and parse it into a JavaScript object that can
be used in the application. */
app.use(express.json());
app.use(cors());

// Routes
/* These lines of code are defining routes for the application. `app.use()` is a method in Express that
is used to mount middleware functions at a specified path. In this case, the middleware functions
are defined in the `articleRoutes` and `commentRoutes` modules, which are imported at the top of the
file. */
app.use("/articles", articleRoutes);
app.use("/comments", commentRoutes);

// Connexion à la base de données
/* This code is connecting to a database using the `connectDB()` function and then starting a server on
port 3000 using `app.listen()`. If the connection to the database is successful, the server will
start and a message will be logged to the console. If there is an error connecting to the database,
the error will be logged to the console. */
connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
