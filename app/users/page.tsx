import GetAllUsers from "@/lib/GetAllUsers";
import type { Metadata } from "next";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

export const metadata: Metadata = {
  title: "Users",
  description: "Users Page",
};

export default async function Users() {
  const usersData: Promise<User[]> = GetAllUsers();
  const users = await usersData;
  return (
    <main className="container p-4">
      <h1 className="text-4xl">Users</h1>
      <br />
      <ul className="grid grid-cols-2">
        {users &&
          users.map((user) => {
            return (
              <li key={user.id}>
                <h2 className="text-2xl underline cursor-pointer">
                  <Link href={"/users/" + user.id}>{user.name}</Link>
                </h2>
                <p>{user.email}</p>
                <br />
              </li>
            );
          })}
      </ul>
      <div className="flex gap-2 items-center">
        <GoArrowLeft className="text-2xl" />
        <Link
          href={"/"}
          className="text-sky-400 underline cursor-pointer text-xl"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
