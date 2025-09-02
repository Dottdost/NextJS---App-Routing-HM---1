import CategoryMenu from "@/components/CategoryMenu";

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">recipes:</h1>
      <CategoryMenu />
      {children}
    </div>
  );
}
