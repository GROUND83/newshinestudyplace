"use server";
import bcrypt from "bcrypt";
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
  console.log("search", search);
  // const users = await Customer.find({});

  // console.log("users", users);
  try {
    const query = search
      ? {
          $or: [
            { userName: { $regex: search, $options: "i" } },
            { phone: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    console.log("pageIndex", pageSize, pageIndex);
    const groupCount = await Customer.find(query).countDocuments();
    const group = await Customer.find(query)
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

export async function getCustomerDetail(customerId: string) {
  let res = await Customer.findOne({ _id: customerId }).select(
    "age changeUniqueId createdAt eventAlram gender isDelete isTester is_black loginKeep onsignalId parentSent personalPolicy phone schoolGrade schoolName servicePolicy timeAlram type uniqueId updatedAt userBirth userName"
  );
  return { data: JSON.stringify(res) };
}

export async function editCustomer(formData: FormData) {
  let data = formData.get("values") as string;
  if (data) {
    let newdata = JSON.parse(data);
    //
    console.log("newdata", newdata);
    try {
      // const hash = await bcrypt.hash("shine1234", 10);
      let customer = await Customer.findOneAndUpdate(
        {
          _id: newdata._id,
        },
        {
          ...newdata,
        }
      );
      return { data: JSON.stringify("customer") };
    } catch (e) {
      return { error: JSON.stringify(e) };
    }
  } else {
    return { error: "error" };
  }
}

export async function resetPassWordCustomer(customerId: string) {
  //
  console.log(customerId);
  try {
    const hash = await bcrypt.hash("shine1234", 10);
    let customer = await Customer.findOneAndUpdate(
      {
        _id: customerId,
      },
      {
        password: hash,
      }
    );
    return { data: JSON.stringify(customer) };
  } catch (e) {
    return { error: JSON.stringify(e) };
  }
}
