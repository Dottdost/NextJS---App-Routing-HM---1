"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "all", href: "/recipes" },
  { name: "dessert", href: "/recipes/category/dessert" },
  { name: "soup", href: "/recipes/category/soup" },
];

export default function CategoryMenu() {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 mb-6">
      {categories.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className={`px-3 py-1 rounded ${
            pathname === c.href ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {c.name}
        </Link>
      ))}
    </div>
  );
}
