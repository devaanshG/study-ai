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
      <div>
        <img src={session.user.image || ""} alt="User Avatar" />
      </div>
    );
  }
}
