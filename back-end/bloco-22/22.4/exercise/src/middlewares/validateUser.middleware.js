/* 
  User model:
  {
    "email": "string",
    "password": "string",
    "firstName": "string",
    "phoneNumber": "string"
  }
*/

const validateUser = (req, res, next) => {
  const { email, password, firstName, phoneNumber } = req.body;
  if (!email || !password || !firstName || !phoneNumber) {
    return res.status(401).json({ message: "empty fields" });
  }

  next();
};

module.exports = validateUser;
