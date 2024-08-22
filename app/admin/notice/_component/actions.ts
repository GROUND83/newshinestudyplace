"use server";

import { connectToMongoDB } from "@/lib/db";
import Customer from "@/models/customer";
import Notice from "@/models/notice";

// import CourseProfile from "@/models/courseProfile";

// import Group from "@/models/group";
// import Lesson from "@/models/lesson";

// import LiveSurvey from "@/models/liveSurvey";
// import Module from "@/models/module";

// import Teacher from "@/models/teacher";

export async function getMoreData({
  pageIndex,
  pageSize,

  page,
  search,
}: {
  pageIndex: number;
  pageSize: number;
  params: any;
  page: string;
  search: string;
}) {
  await connectToMongoDB();
  // const users = await Customer.find({});

  // console.log("users", users);
  try {
    const query = search
      ? {
          $or: [{ title: { $regex: search, $options: "i" } }],
        }
      : {};

    console.log("pageIndex", pageSize, pageIndex);
    const groupCount = await Notice.find({}).countDocuments();
    const group = await Notice.find({})
      .limit(pageSize)
      .skip(pageSize * (pageIndex - 1))
      .sort({
        createdAt: -1,
      });
    console.log("group", group);
    return {
      rows: JSON.stringify(group),
      pageCount: Math.ceil(groupCount / pageSize),
      totalCount: groupCount,
    };
  } catch (e) {
    // console.log(e);
    return { message: "그룹 오류" };
  }
}

// export async function getLiveSurvey(groupId: string) {
//   let res = await LiveSurvey.find({ groupId: groupId });
//   return { data: JSON.stringify(res) };
// }
