import mongoose, { Document, Model, Types } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  userName: string;
  onsignalId: string;
  deviceId: string;
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const user = new mongoose.Schema<IUserDocument>(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
    },
    userName: {
      type: String,
    },
    onsignalId: { type: String },
    deviceId: { type: String },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUserDocument> =
  mongoose.models?.User || mongoose.model("User", user);

export default User;
