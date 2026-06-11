// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// const FeedbackCard = ({
//   description,
//   headline,
//   icon: Icon,
//   title,
// }: FeedbackCardProps) => {
//   return (
//     <Card>
//       <CardHeader>
//       <span className="flex gap-1 items-center">
//         <Icon />
//         {headline}
//       </span>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>{description}</CardDescription>
//       </CardHeader>
//     </Card>
//   );
// };

// export default FeedbackCard;
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const FeedbackCard = ({
  description,
  headline,
  icon: Icon,
  title,
  className,
}: FeedbackCardProps) => {
  return (
    <Card
      className={cn(
        "group transition-all duration-300 hover:shadow-sm hover:border-border/80",
        className
      )}
    >
      <CardHeader className="flex flex-col gap-3">
        {/* Header row */}
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span className="flex items-center gap-2">
            <Icon className="h-4 w-4 shrink-0" />
            {headline}
          </span>
        </div>

        {/* Title */}
        <CardTitle className="text-base md:text-lg leading-snug group-hover:tracking-tight transition-all">
          {title}
        </CardTitle>

        {/* Description */}
        <CardDescription className="leading-relaxed text-sm">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeedbackCard;