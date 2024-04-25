import { Router } from 'express'
import { users } from '../users.js'
import jwt from 'jsonwebtoken'
import { compareSync } from 'bcrypt'
import { secretKey } from '../config.js';

const router = Router();

router.post('/login', (req, res) => {
  try {
    const {username: userName, password} = req.body;
    if(!userName || !password)  {
      return res.status(400).json({message: 'Username and password are requiered'})
    }

    const userFound = users.find(user => user.username === userName)
    if(!userFound || !compareSync(password, userFound.password)) {
      return res.status(403).json({ message: "Authentication failed" });
    }

    const userNameToJwt = userFound.username;
    const token = jwt.sign({ userNameToJwt }, secretKey, {expiresIn: '1h'})
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
})


export default router;