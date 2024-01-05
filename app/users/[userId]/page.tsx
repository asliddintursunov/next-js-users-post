import GetUser from "@/lib/GetUser";
import GetUserPosts from "@/lib/GetUserPosts";
import { GoArrowLeft } from "react-icons/go";
import type { Metadata } from "next";
import Link from "next/link";
type Props = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Props): Promise<Metadata> {
  const userData: Promise<User> = GetUser(userId);
  const user = await userData;
  if (!user) {
    return {
      title: "Not found User",
    };
  }
  return {
    title: user.name,
    description: user.email,
  };
}

export default async function UserPost({ params: { userId } }: Props) {
  const userPostsData: Promise<Post[]> = GetUserPosts(userId);
  const userData: Promise<User> = GetUser(userId);
  const [userPosts, user] = await Promise.all([userPostsData, userData]);

  return (
    <main className="container p-3">
      {user.name && <h1 className="text-3xl">{user.name}&apos;s posts</h1>}
      <br />
      {userPosts && (
        <div>
          {userPosts.map((post) => {
            return (
              <div key={post.id}>
                <h2 className="text-2xl underline cursor-pointer">
                  {post.title}
                </h2>
                <p>{post.body}</p>
                <br />
              </div>
            );
          })}
        </div>
      )}
      <div className="flex gap-2 items-center">
          <GoArrowLeft className="text-2xl" />
          <Link
            href={"/users"}
            className="text-xl text-sky-500 underline cursor-pointer"
          >
            Back to Users
          </Link>
        </div>
    </main>
  );
}
