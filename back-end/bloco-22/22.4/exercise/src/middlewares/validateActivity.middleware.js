/* 
  Activity model:
  {
    "name": "string",
    "price": "number",
    "description": {
      "rating": "number",
      "difficulty": "Easy | Medium | Hard",
      "createdAt": "date",
    }
  }
*/

const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "name is required" });
  } else if (name.length < 4) {
    return res
      .status(400)
      .json({ message: "name must be at least 4 characters long" });
  } else {
    next();
  }
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if (!price) {
    return res.status(400).json({ message: "price is required" });
  } else if (typeof price !== "number") {
    return res.status(400).json({ message: "price must be a number" });
  } else if (price < 0) {
    return res.status(400).json({ message: "price must be zero or greater" });
  } else {
    next();
  }
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: "description is required" });
  } else {
    next();
  }
};

const validateRating = (req, res, next) => {
  const { rating } = req.body.description;

  if (!rating) {
    return res.status(400).json({ message: "rating is required" });
  } else if (typeof rating !== "number") {
    return res.status(400).json({ message: "rating must be a number" });
  } else if (rating < 0 || rating > 5) {
    return res.status(400).json({ message: "rating must be between 0 and 5" });
  } else {
    next();
  }
};

const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const difficulties = ["Easy", "Medium", "Hard"];

  if (!difficulty) {
    return res.status(400).json({ message: "difficulty is required" });
  } else if (typeof difficulty !== "string") {
    return res.status(400).json({ message: "difficulty must be a string" });
  } else if (!difficulties.includes(difficulty)) {
    return res
      .status(400)
      .json({ message: "difficulty must be one of Easy, Medium or Hard" });
  } else {
    next();
  }
};

const validateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;
  const dateRegex = /^\d{1,2}-\d{1,2}-\d{4}$/;

  if (!createdAt) {
    return res.status(400).json({ message: "createdAt is required" });
  } else if (typeof createdAt !== "string") {
    return res.status(400).json({ message: "createdAt must be a string" });
  } else if (!dateRegex.test(createdAt)) {
    return res.status(400).json({ message: "createdAt must be a valid date" });
  } else {
    next();
  }
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Token not found" });
  } else if (authorization.length !== 16) {
    return res.status(401).json({ message: "Token malformed" });
  } else {
    next();
  }
};

module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateRating,
  validateDifficulty,
  validateCreatedAt,
  validateToken,
};
