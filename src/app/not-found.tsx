import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* 404 */}
        <div className="mb-6">
          <h1 className="text-[120px] sm:text-[160px] font-black leading-none tracking-tight text-white">
            404
          </h1>

          <div className="h-1.5 w-20 bg-blue-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
          It may have been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:-translate-y-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4m4 0h4a1 1 0 001-1V10"
            />
          </svg>

          Back to Home
        </Link>
      </div>
    </main>
  );
}