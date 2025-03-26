type Category = {
  category: string;
  image: string;
};
interface SectionProps {
  categories: Category[];
  title: string;
}
export const ChooseByCategory = ({ categories, title }: SectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
      <div className="flex gap-8">
        {categories.map((category, i) => (
          <div className="flex flex-col space-y-2">
            <div
              key={i}
              className="bg-[#E1F3E4] size-24 flex items-center justify-center rounded-3xl"
            >
              <img src={category.image} alt={category.category} />
            </div>
            <p className="text-center text-lg text-zinc-800 font-medium">
              {category.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
