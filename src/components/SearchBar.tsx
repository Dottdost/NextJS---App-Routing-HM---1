"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(`/recipes/search?query=${query}`);
    }, 400);
    return () => clearTimeout(timeout);
  }, [query, router]);

  return (
    <input
      type="text"
      placeholder="enter..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 mb-4 w-full"
    />
  );
}
