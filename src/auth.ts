import PostgresAdapter from "@auth/pg-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { pool } from "@/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [
    Google({
      authorization: {
        params: {
          redirect_uri: process.env.NEXTAUTH_URL,
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
