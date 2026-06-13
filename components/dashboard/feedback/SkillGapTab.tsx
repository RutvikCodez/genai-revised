import { cn } from "@/lib/utils";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";

const SkillGapTab = ({ skillGaps }: { skillGaps: SkillGapsProps[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {skillGaps.map(({ id, impact, severity, skill }) => (
        <Card
          key={id}
          className="transition-all hover:border-border hover:shadow-sm"
        >
          <CardContent className="flex flex-col gap-4 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h4 className="font-semibold tracking-tight">{skill}</h4>
                <p className="text-sm text-muted-foreground">
                  Missing or underrepresented skill
                </p>
              </div>

              <Badge
                variant={
                  severity.toLowerCase() === "low"
                    ? "destructive"
                    : severity.toLowerCase() === "medium"
                      ? "secondary"
                      : "default"
                }
                className={cn("shrink-0",{
                    "text-red-500": severity.toLowerCase() === "low"
                })}
              >
                {severity}
              </Badge>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Impact
              </p>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {impact}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillGapTab;
