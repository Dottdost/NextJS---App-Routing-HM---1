import { recipes } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export default function RecipePage({ params }: Props) {
  const recipe = recipes.find((r) => r.slug === params.slug);

  if (!recipe) return <div>404</div>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <h2 className="mt-4 text-xl font-semibold">ingredients:</h2>
      <ul className="list-disc ml-6">
        {recipe.ingredients.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <h2 className="mt-4 text-xl font-semibold">steps:</h2>
      <ol className="list-decimal ml-6">
        {recipe.steps.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ol>
    </main>
  );
}
