// middleware/auth.js
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ error: "Authentication Failed" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, "shivamjaiswal123");
    req.body.user = { userId: payload.userId };
    next();
  } catch (error) {
    return res.status(401).json({ error: "Authentication Failed" });
  }
};

module.exports = auth;
