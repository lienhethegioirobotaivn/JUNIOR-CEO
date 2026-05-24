"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>

      <p className="text-zinc-400 mb-6 text-center max-w-xl">{error.message}</p>

      <button
        onClick={() => reset()}
        className="px-5 py-3 rounded-xl bg-white text-black font-medium"
      >
        Try again
      </button>
    </div>
  );
}
