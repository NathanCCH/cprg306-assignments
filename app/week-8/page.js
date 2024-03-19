"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      const result = await gitHubSignIn();
      console.log(result);
    } catch (error) {
      console.error("Sign in failed", error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
      console.log("Sign out successful");
    } catch (error) {
      console.error("Sign out failed", error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-cyan-800 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Shopping List Tool</h1>
        {!user && (
          <button
            onClick={handleSignIn}
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-3 rounded w-full transition duration-300 ease-in-out"
          >
            Sign in with GitHub
          </button>
        )}
        {user && (
          <>
            <div className="text-center mb-4">
              <p className="text-gray-900 font-semibold">Welcome, {user.displayName || "Anonymous User"}</p>
              <p className="text-gray-900 font-semibold pb-1">Email: {user.email || "Anonymous"}</p>
              <h2 className="text-2xl font-bold py-3" >
          <Link href="week-8/shopping-list" className="text-cyan-600 hover:text-cyan-400">
          Click here to start
          </Link>
        </h2>
            </div>
            <button
              onClick={handleSignOut}
              className="items-center bg-red-600 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </main>
  );
}