import mongoose, { Document, Model, Types } from "mongoose";

export interface INotice {
  title: string;
  content: string;
  isHidden: boolean; // 노출여부
  is_reader: Array<{
    type: mongoose.Schema.Types.ObjectId;
    ref: "Customer";
  }>;
  is_dontSee: Array<{ type: mongoose.Schema.Types.ObjectId; ref: "Customer" }>;
  is_popup: boolean; // 팝업
}

export interface INoticeDocument extends INotice, Document {
  createdAt: Date;
  updatedAt: Date;
}

const notice = new mongoose.Schema<INoticeDocument>(
  {
    title: {
      type: String, //제목
    },
    content: {
      type: String, //내용
    },
    isHidden: { type: Boolean, default: false }, // 노출여부
    is_reader: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
    is_dontSee: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
    is_popup: { type: Boolean, default: false }, // 팝업
  },
  {
    timestamps: true,
  }
);

const Notice: Model<INoticeDocument> =
  mongoose.models?.Notice || mongoose.model("Notice", notice);

export default Notice;
