import mongoose from "mongoose";

/* This code is defining a Mongoose schema for an article. The schema specifies that an article has a
`title` and `content`, both of which are required and of type `String`. The `{ timestamps: true }`
option adds two additional fields to the schema: `createdAt` and `updatedAt`, which will
automatically be set to the current date and time when a new article is created or an existing
article is updated. */
const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/* `const Article = mongoose.model("Article", articleSchema);` is creating a Mongoose model called
`Article` based on the `articleSchema` schema. This model can be used to interact with the MongoDB
database collection that corresponds to the `Article` model. */
const Article = mongoose.model("Article", articleSchema);

/* `export { Article };` is exporting the `Article` model from the module so that it can be imported
and used in other parts of the application. */
export { Article };
