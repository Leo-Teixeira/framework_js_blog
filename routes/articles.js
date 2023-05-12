import express from "express";
import {
  getArticles,
  createArticle,
} from "../controllers/articleController.js";

const router = express.Router();

/* `router.get("/getArticles", getArticles)` is creating a route for a GET request to the
"/getArticles" endpoint, and when this endpoint is accessed, it will call the `getArticles` function
from the `articleController` module. */
router.get("/getArticles", getArticles);
router.post("/createArticles", createArticle);

/* `export { router as articleRoutes };` is exporting the `router` object as `articleRoutes`. This
allows other modules to import and use the `router` object as `articleRoutes`. */
export { router as articleRoutes };
