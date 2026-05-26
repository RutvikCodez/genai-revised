import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  rating = 5,
  className = "",
}: TestimonialCardProps) => {
  return (
    <Card className={cn("h-full flex justify-between flex-col", className)}>
      <CardHeader>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-muted-foreground leading-relaxed italic">
          {` "${quote}"`}
        </blockquote>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <CardTitle>{author}</CardTitle>
        <CardDescription>
          {role} at {company}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
