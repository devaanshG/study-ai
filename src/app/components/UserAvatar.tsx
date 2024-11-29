import Link from "next/link";
import { User } from "lucide-react";
import { auth } from "@/auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) {
    return (
      <Link href={"/api/auth/signin"}>
        <User size={24} />
      </Link>
    );
  } else {
    return (
      <Link href={"/profile"}>
        <img width={"24px"} src={session.user.image || ""} alt="User Avatar" />
      </Link>
    );
  }
}
