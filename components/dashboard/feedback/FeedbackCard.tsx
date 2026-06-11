import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeedbackCard = ({
  description,
  headline,
  icon: Icon,
  title,
}: FeedbackCardProps) => {
  return (
    <Card>
      <CardHeader>
      <span className="flex gap-1 items-center">
        <Icon />
        {headline}
      </span>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeedbackCard;
