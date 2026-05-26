import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const PricingCard = ({
  name,
  price,
  description,
  features,
  cta,
  highlighted = false,
  className = "",
}: PricingCardProps) => {
  return (
    <Card
      className={cn(
        {
          "border-cyan-500/50 bg-linear-to-br from-cyan-500/10 to-blue-500/10 shadow-lg shadow-cyan-500/20":
            highlighted,
          "border-border/50 bg-muted/30 hover:border-border": !highlighted,
        },
        className,
      )}
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-end">
            <span className="text-4xl font-bold text-foreground">{price}</span>
            <span className="text-muted-foreground ">/month</span>
          </div>
          <Button
            variant={"outline"}
            className={cn({
              "bg-linear-to-r from-cyan-400 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30":
                highlighted,
              "border border-border text-foreground hover:bg-muted":
                !highlighted,
            })}
          >
            {cta}
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="size-5 text-green-500 shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
