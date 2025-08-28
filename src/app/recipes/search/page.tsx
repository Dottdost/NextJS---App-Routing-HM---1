"use client";

import { useState, useEffect } from "react";
import { recipes } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(recipes);

  useEffect(() => {
    setFiltered(
      recipes.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search:</h1>
      <input
        type="text"
        placeholder="Enter."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {filtered.map((r) => (
          <RecipeCard
            key={r.slug}
            title={r.title}
            description={r.description}
            slug={r.slug}
          />
        ))}
      </div>
    </main>
  );
}
