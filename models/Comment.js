import mongoose from 'mongoose';

/* This code is defining a Mongoose schema for a comment object. The schema specifies that a comment
has three properties: `articleId`, `author`, and `content`. `articleId` is a required field that
references the `Article` model, `author` is a required string field, and `content` is a required
string field. The `{ timestamps: true }` option adds two additional fields to the schema:
`createdAt` and `updatedAt`, which are automatically managed by Mongoose. */
const commentSchema = new mongoose.Schema(
  {
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
      required: true,
    },
    author: {
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

/* `const Comment = mongoose.model('Comment', commentSchema);` is creating a Mongoose model called
`Comment` based on the `commentSchema` schema. This model can be used to interact with the MongoDB
database collection that stores comments. */
const Comment = mongoose.model('Comment', commentSchema);

/* `export { Comment };` is exporting the `Comment` model from the module so that it can be imported
and used in other parts of the application. */
export { Comment };