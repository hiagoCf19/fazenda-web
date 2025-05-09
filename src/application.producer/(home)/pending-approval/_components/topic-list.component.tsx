interface TopicListProps {
  title: string;
  text: string;
}
export function TopicList({ title, text }: TopicListProps) {
  return (
    <div className="flex gap-2">
      <div className="min-w-2 h-2 bg-orange rounded-full mt-2" />
      <div className="flex flex-col ">
        <p className="text-md md:text-2xl md:font-bold font-medium text-zinc-800">
          {title}
        </p>
        <span className="text-xs md:text-xl text-zinc-800 text-pretty">
          {text}
        </span>
      </div>
    </div>
  );
}
