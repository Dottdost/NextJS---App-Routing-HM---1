import Link from "next/link";

interface Props {
  title: string;
  description: string;
  slug: string;
}

export default function RecipeCard({ title, description, slug }: Props) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <Link href={`/recipes/${slug}`} className="text-blue-500">
        more
      </Link>
    </div>
  );
}
