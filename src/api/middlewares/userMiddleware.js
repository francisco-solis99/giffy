import jwt from 'jsonwebtoken'
import { secretKey } from '../config.js';


export function userMiddleware(req, res, next) {
  const headerToken = req.header("Authorization") || "";
  if (!headerToken) {
    req.username= null;
    return next()
  }
  try {
    const payload = jwt.verify(headerToken, secretKey);
    req.username = payload.userNameToJwt;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token not valid" });
  }
}