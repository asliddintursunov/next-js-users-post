"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="container grid place-content-center h-screen">
      <h2 className="text-red-500 text-2xl text-center">
        OOPS, Something went wrong!
      </h2>
      <button
        className="py-2 px-4 rounded-md bg-red-500 text-white hover:bg-red-400"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
