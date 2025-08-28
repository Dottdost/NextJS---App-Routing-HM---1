import { recipes } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  const categories = Array.from(new Set(recipes.map((r) => r.category)));
  return categories.map((category) => ({ category }));
}

export default function CategoryPage({ params }: Props) {
  const filtered = recipes.filter((r) => r.category === params.category);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">category: {params.category}</h1>
      {filtered.length === 0 ? (
        <p>no recipes</p>
      ) : (
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
      )}
    </main>
  );
}
