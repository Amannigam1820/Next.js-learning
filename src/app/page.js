"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("product");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold mt-2 text-lg">
        Welcome to next tutorial
        <div>
          <Link href={"product"}>Naigate to Product page</Link>
          <Link href={"account"}>Naigate to Account page</Link>

          <div className="p-5 bg-slate-500">
            <h2 className="font-bold mt-2 text-lg">
              Alternative way of navigating using useRouter
            </h2>
            <button
              onClick={handleNavigate}
              className="p-2 bg-slate-500 rounded-lg mt-3"
            >
              Navigate to product page useing useRouter
            </button>
          </div>
        </div>
      </h1>
    </main>
  );
}
