"use server";

import User from "@/models/user";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(formData: FormData) {
  try {
    let email = formData.get("email");
    let password = formData.get("password");
    let role = formData.get("role");
    let callbackUrl = formData.get("callbackUrl") as string;
    console.log({
      email: email,
      password: password,
      role: role,
      callbackUrl: callbackUrl,
      redirect: false,
    });
    await signIn("credentials", {
      email: email,
      password: password,
      role: role,
      callbackUrl: callbackUrl,
      redirect: false,
    });
    return false;
  } catch (error) {
    console.log("errorerror", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return JSON.stringify({ passwrod: "Invalid credentials." });
      }
    }
    throw error;
  }
}
