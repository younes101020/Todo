"use client";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type TagsStyle = {
  background: string;
  border: string;
  text: string;
};

const Tag = ({ tag }: { tag: string }) => {
  const TAILWIND_COLORS = [
    {
      background: "bg-emerald-600/50",
      border: "border-emerald-200",
      text: "text-emerald-100"
    },
    {
      background: "bg-yellow-600/50",
      border: "border-yellow-200",
      text: "text-yellow-100"
    },
    {
      background: "bg-pink-600/50",
      border: "border-pink-200",
      text: "text-pink-100"
    },
    {
      background: "bg-purple-600/50",
      border: "border-purple-200",
      text: "text-purple-100"
    },
    {
      background: "bg-teal-600/50",
      border: "border-teal-200",
      text: "text-teal-100"
    }
  ];

  const [tagStyle] = useState<TagsStyle[]>(TAILWIND_COLORS);
  const [selectedStyle, setSelectedStyle] = useState<TagsStyle>();
  useEffect(() => {
    setSelectedStyle(tagStyle[Math.floor(Math.random() * 5)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return selectedStyle ? (
    <li
      className={`${selectedStyle.background} ${selectedStyle.border} ${selectedStyle.text} border-2 px-2 rounded-lg truncate flex justify-center`}
    >
      #{tag}
    </li>
  ) : (
    <Skeleton className="h-4" />
  );
};

export { Tag };
