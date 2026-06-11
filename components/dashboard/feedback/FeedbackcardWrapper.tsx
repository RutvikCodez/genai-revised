import {
  Flame,
  Hospital,
  ListCheck,
  TriangleAlert,
} from "lucide-react";
import FeedbackCard from "./FeedbackCard";
import { cn } from "@/lib/utils";

const FeedbackcardWrapper = ({
  days,
  label,
  range,
  skillGap,
  skillGapLength,
  totalTask,
  totalquestion,
}: FeedbacCardWapperProps) => {
  const stats = [
    {
      icon: Flame,
      headline: label,
      title: range,
      description: "Score range",
    },
    {
      icon: TriangleAlert,
      headline: "Skill gaps",
      title: skillGapLength,
      description: skillGap,
    },
    {
      icon: ListCheck,
      headline: "Prep tasks",
      title: totalTask,
      description: `Across ${days} days`,
    },
    {
      icon: Hospital,
      headline: "Questions",
      title: totalquestion,
      description: "Total to practise",
    },
  ];

  return (
    <section
      className={cn(
        "w-full grid gap-4",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {stats.map((item, i) => {
        const Icon = item.icon;

        return (
          <FeedbackCard
            key={i}
            icon={Icon}
            headline={item.headline}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </section>
  );
};

export default FeedbackcardWrapper;