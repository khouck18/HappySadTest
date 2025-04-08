import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="border p-4 rounded-lg text-center bg-yellow-200 hover:bg-yellow-300 transition duration-200">
        <Link href="/happy">
          <h2 className="text-xl font-bold text-gray-700">
            Explore a Happy Tone
          </h2>
          <p className="text-sm text-gray-500">
            Click here to write in a happy, uplifting tone.
          </p>
        </Link>
      </div>
      <div className="border p-4 rounded-lg text-center bg-blue-200 hover:bg-blue-300 transition duration-200">
        <Link href="/sad">
          <h2 className="text-xl font-bold text-gray-700">
            Explore a Sad Tone
          </h2>
          <p className="text-sm text-gray-500">
            Click here to write in a more melancholic tone.
          </p>
        </Link>
      </div>
    </div>
  );
}
