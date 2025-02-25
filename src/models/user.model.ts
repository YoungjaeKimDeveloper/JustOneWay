import mongoose, { Document, Schema } from "mongoose";

// Model별로 interface만들어주기
// Typescript에서는 Type에 소문자를 넣어주어야힘
// 인터페이스 만들어주기
// Mongoose + Interface Combination
export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  bannerImg: string;
  headline: string;
  location: string;
  about: string;
  skills: string[];
  experiences: {
    school: string;
    fieldStudy: string;
    startYear: number;
    endYear: number;
  }[];
  connections: mongoose.Types.ObjectId[];
}
const userSchema: Schema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    bannerImg: {
      type: String,
      default: "",
    },
    headline: {
      type: String,
      default: "Linkedin User",
    },
    location: {
      type: String,
      default: "Sydney",
    },
    about: {
      type: String,
      default: "",
    },
    skills: [String],
    experiences: [
      {
        school: String,
        fieldStudy: String,
        startYear: Number,
        endYear: Number,
      },
    ],
    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);
