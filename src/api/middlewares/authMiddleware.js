export function authMiddleware(req, res, next) {
  if(req.username) {
    next()
  } else {
    res.status(405).json({ message: "Token not provied" })
  }
}