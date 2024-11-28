"use client";
import { useSession, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

const Profile = () => {
  const { data: session, status } = useSession();

  // If session is loading, show loading state
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // If no session, show sign-in link
  if (!session) {
    return (
      <div>
        <p>You are not signed in.</p>
        <Link href="/auth/signin">Sign in</Link>
      </div>
    );
  }

  const { user } = session;

  return (
    <>
      <Head>
        <title>Profile | StudyAI</title>
      </Head>
      <div className="profile-container">
        <h1>Welcome, {user?.name || "User"}!</h1>
        <div className="profile-info">
          <img
            src={user?.image || "/default-avatar.png"}
            alt="Profile Picture"
            className="profile-avatar"
          />
          <p>Email: {user?.email}</p>
        </div>
        <button onClick={() => signOut()} className="sign-out-btn">
          Sign Out
        </button>
      </div>
    </>
  );
};

export default Profile;
