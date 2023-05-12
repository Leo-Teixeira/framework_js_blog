import express from "express";
import {
  getComments,
  createComment,
} from "../controllers/commentController.js";

const router = express.Router({ mergeParams: true });

/* `router.get("/getComments", getComments)` is creating a route for GET requests to the "/getComments"
endpoint and calling the `getComments` function from the `commentController` module when the
endpoint is accessed. */
router.get("/getComments", getComments);
router.post("/createComment", createComment);

/* `export { router as commentRoutes };` is exporting the `router` object as `commentRoutes`. This
allows other modules to import and use the `commentRoutes` object. */
export { router as commentRoutes };
