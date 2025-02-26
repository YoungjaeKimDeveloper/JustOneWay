// External library
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
// User Model
import User from "../models/user.model";

// Sign up
export const signup = async (
  req: Request & {
    body: {
      username: string;
      email: string;
      password: string;
    };
  },
  res: Response
) => {
  const { name, username, email, password } = req.body;
  //   Validation
  if (!name || !username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill up the all forms" });
  }
  const existedUsername = await User.findOne({ username });
  if (existedUsername) {
    return res
      .status(401)
      .json({ success: false, message: "Username Existed" });
  }
  const existedEmail = await User.findOne({ email });
  if (existedEmail) {
    return res.status(401).json({ success: false, message: "Email Existed" });
  }
  if (password.length < 6) {
    return res
      .status(401)
      .json({ success: false, message: "Password at least 6 letters" });
  }
  // Create New User

  try {
    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new User({
      name: name,
      username: username,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    // Create new Token
    return res
      .status(201)
      .json({ success: true, message: "New user created successfully" });
  } catch (error) {
    console.error("Failed to hash the password");
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
// Log in
export const login = async (req: Request, res: Response) => {};
// Log out
export const logout = async (req: Request, res: Response) => {};
