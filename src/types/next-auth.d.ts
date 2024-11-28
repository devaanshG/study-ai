// types/next-auth.d.ts
import { DefaultUser } from "next-auth";

// This is where we extend the next-auth User type
declare module "next-auth" {
  interface User extends DefaultUser {
    id: string; // Add the 'id' property to the User interface
  }

  interface Session {
    user: User; // Ensure 'session.user' includes the extended User type
  }
}
