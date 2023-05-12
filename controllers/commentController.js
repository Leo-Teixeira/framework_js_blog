import { Comment } from "../models/Comment.js";
/**
 * This function retrieves comments associated with a specific article ID and sends them as a JSON
 * response.
 * @param req - req stands for request and it is an object that contains information about the HTTP
 * request that was made, such as the URL, headers, and any data that was sent in the request. In this
 * case, it is used to retrieve the articleId parameter from the URL.
 * @param res - `res` is the response object that is used to send the response back to the client. It
 * is an instance of the `http.ServerResponse` class in Node.js. The `res` object has methods like
 * `status`, `json`, `send`, etc. that are used to send the
 */

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ articleId: req.params.articleId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * This function creates a new comment and saves it to the database.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request parameters, headers, body, etc.
 * @param res - `res` is the response object that is used to send the response back to the client. It
 * is an instance of the `http.ServerResponse` class in Node.js. The `res` object has various methods
 * that can be used to send different types of responses such as JSON, HTML, text
 */
const createComment = async (req, res) => {
  const comment = new Comment({
    articleId: req.params.articleId,
    author: req.body.author,
    content: req.body.content,
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/* `export { getComments, createComment };` is exporting the `getComments` and `createComment`
functions so that they can be imported and used in other files. */
export { getComments, createComment };
