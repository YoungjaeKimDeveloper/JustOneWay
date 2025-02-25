import mongoose, { Document } from "mongoose";

// Model별로 interface만들어주기
export interface IUser extends Document {
  name: String;
  username: String;
  email: String;
  password: String;
  profilePicture: String;
  bannerImg: String;
  headline: String;
  location: String;
  about: String;
  skills: [String];
  experiences: [
    { school: String; fieldStudy: String; startYear: Number; endYear: Number }
  ];
  connections:{
    
  }
}
const userSchema = new mongoose.Schema(
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

const User = mongoose.model("User", userSchema);
