import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../../ui/badge";

const PrepPlanTab = ({
  preparationDays,
}: {
  preparationDays: PreparationDaysProps[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      {preparationDays.map(({ day, focus, tasks, id }) => (
        <div key={id} className="flex gap-4 items-start">
          <div className="flex flex-col items-center shrink-0 gap-2">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 font-medium"
            >
              Day {day}
            </Badge>

            {day !== preparationDays.length && (
              <div className="h-full min-h-16 w-px bg-border" />
            )}
          </div>

          {/* Content */}
          <Card className="flex-1 transition-all hover:border-border hover:shadow-sm flex flex-col gap-3">
            <CardHeader>
              <CardTitle className="text-base md:text-lg">
                {focus}
              </CardTitle>

              <CardDescription>
                Focus area for this preparation stage
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="flex flex-col gap-3">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PrepPlanTab;