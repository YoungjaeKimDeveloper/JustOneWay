import { Request, Response } from "express";
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
  const { username, email, password } = req.body;
  //   Validation
  if (!username || !email || !password) {
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
};
// Log in
export const login = async (req: Request, res: Response) => {};
// Log out
export const logout = async (req: Request, res: Response) => {};
