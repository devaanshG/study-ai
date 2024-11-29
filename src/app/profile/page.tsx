"use client"; // Required for useSession in the App Router

import { useSession, signOut } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">Unauthorized</h1>
        <p className="text-lg mb-6">You need to sign in to view this page.</p>
        <a
          href="/api/auth/signin"
          className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
        >
          Sign In
        </a>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <div className="max-w-sm w-full p-6 rounded-lg bg-white text-black shadow-lg">
        {/* Profile Picture */}
        {user.image && (
          <img
            src={user.image}
            alt="Profile Picture"
            className="w-24 h-24 mx-auto rounded-full mb-6"
          />
        )}
        {/* User Information */}
        <h1 className="text-center text-2xl font-bold">
          {user.name || "User"}
        </h1>
        <p className="text-center text-gray-600">
          {user.email || "No email provided"}
        </p>

        {/* Sign Out Button */}
        <button
          onClick={() => signOut()}
          className="mt-6 w-full px-6 py-2 bg-black text-white border border-black rounded hover:bg-white hover:text-black transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
