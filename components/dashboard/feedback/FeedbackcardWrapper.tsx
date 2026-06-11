import { Flame, Hospital, ListCheck, TriangleAlert } from "lucide-react";
import FeedbackCard from "./FeedbackCard";

const FeedbackcardWrapper = ({days,label,range,skillGap,skillGapLength,totalTask,totalquestion}:FeedbacCardWapperProps) => {
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
    <div className="w-full grid grid-cols-4 gap-10">
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
    </div>
  );
};

export default FeedbackcardWrapper;
