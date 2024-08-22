import type { NextAuthConfig } from "next-auth";
import User from "./models/user";

export const authConfig = {
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 3 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    signOut: "/",
  },
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth?.user;
      // console.log("auth authorized", auth, isAuthenticated);
      return isAuthenticated;
    },

    jwt: async ({ token, user }) => {
      console.log("tokendata", token, user);
      if (user) {
        token.userName = (user.userName as any) || "";
        token.email = user.email as any;
        token.role = "admin";
        token._id = user._id as any;
        // session.user._id = token._id;
      }
      console.log("!tokendata", token);
      return token;
    },
    session: async ({ session, token }) => {
      console.log("sessiondata", session, token);
      session.user = token as any;
      console.log("sessionsession", session);

      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
