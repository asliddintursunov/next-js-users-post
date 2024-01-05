import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <h1 className="text-5xl font-bold text-center">
          Users posts using <br /> Next.js + TypeScript
        </h1>
        <br />
        <div className="flex gap-2 items-center">
          <GoArrowRight className="text-2xl" />
          <Link
            href={"/users"}
            className="text-xl text-sky-500 underline cursor-pointer"
          >
            Go to Users
          </Link>
        </div>
      </div>
    </main>
  );
}
