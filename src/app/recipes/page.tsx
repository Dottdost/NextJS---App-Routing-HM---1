import { recipes } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";

export default function RecipesPage() {
  return (
    <main className="p-6">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {recipes.map((r) => (
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
