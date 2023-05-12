import { Article } from "../models/Article.js";

/**
 * This function retrieves all articles and sends them as a JSON response, or sends a 500 error message
 * if there is an error.
 * @param req - req stands for "request" and it is an object that represents the HTTP request made by
 * the client to the server. It contains information such as the URL, HTTP method, headers, and any
 * data sent in the request body. In this case, the function is using the request object to retrieve a
 * @param res - `res` is the response object that is used to send the response back to the client. It
 * is an object that has methods like `status()` to set the HTTP status code, `json()` to send a JSON
 * response, and many others. In this code snippet, `res` is used
 */
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * This function creates a new article with a title and content and saves it to the database, returning
 * the new article or an error message.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request headers, request parameters, request body, etc.
 * @param res - `res` is the response object that is sent back to the client after the server has
 * processed the request. It contains information such as the status code, headers, and the response
 * body. In this case, `res` is used to send a JSON response with the newly created article or an error
 */
const createArticle = async (req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/* `export { getArticles, createArticle };` is exporting the `getArticles` and `createArticle`
functions so that they can be imported and used in other files. This is known as a named export in
JavaScript. */
export { getArticles, createArticle };
