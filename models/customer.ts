import mongoose, { Document, Model, Types } from "mongoose";

export interface ICustomer {
  type: string;
  isTester: boolean;
  gender: string;
  email: string;
  userName: string;
  phone: string;
  parentPhone: string;
  parentSent: boolean;
  userBirth: string;
  age: number;
  schoolName: string;
  schoolGrade: number;
  personalPolicy: boolean;
  servicePolicy: boolean;
  onsignalId: string;
  deviceId: string;
  authcode: string; // randome 4자리
  authtime: number; // unixtime
  timeAlram: boolean;
  eventAlram: boolean;
  is_black: boolean;
  password: string;
  avatarUrl: string;

  loginKeep: boolean;
  isDelete: boolean;
  deleteDate: Date;
  uniqueId: { type: String; default: "" };
  changeUniqueId: boolean;
  //
  qrtime: number; //ms
  qrauthcode: number;
}

export interface ICustomerDocument extends ICustomer, Document {
  createdAt: Date;
  updatedAt: Date;
}

const customer = new mongoose.Schema<ICustomerDocument>(
  {
    type: {
      type: String,
      enum: ["일반", "학생", "샤인학원생"],
      default: "학생",
      require: true,
    },
    isTester: { type: Boolean, default: false },
    gender: {
      type: String,
      enum: ["남", "여"],
      default: "남",
      require: true,
    },
    email: {
      type: String,
    },
    userName: { type: String },
    phone: { type: String, require: true, unique: true },
    parentPhone: { type: String },
    parentSent: { type: Boolean, default: true },
    userBirth: { type: String },
    age: { type: Number },
    schoolName: { type: String },
    schoolGrade: { type: Number },
    personalPolicy: { type: Boolean, default: true },
    servicePolicy: { type: Boolean, default: true },
    onsignalId: { type: String },
    deviceId: { type: String },
    authcode: { type: String }, // randome 4자리
    authtime: { type: Number }, // unixtime
    timeAlram: { type: Boolean, default: true },
    eventAlram: { type: Boolean, default: true },
    is_black: { type: Boolean, default: false },
    password: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },

    loginKeep: { type: Boolean, default: false },
    isDelete: { type: Boolean, default: false },
    deleteDate: { type: Date },
    uniqueId: { type: String, default: "" },
    changeUniqueId: { type: Boolean, default: false },
    //
    qrtime: { type: Number }, //ms
    qrauthcode: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Customer: Model<ICustomerDocument> =
  mongoose.models?.Customer || mongoose.model("Customer", customer);

export default Customer;
