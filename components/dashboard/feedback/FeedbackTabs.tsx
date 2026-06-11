import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const FeedbackTabs = ({
  feedback,
}: {
  feedback: FeedbackTabsProps[];
}) => {
  const defaultTab = feedback?.[0]?.title;

  if (!feedback?.length) return null;

  return (
    <Tabs
      defaultValue={defaultTab}
      className="flex w-full flex-col gap-5"
    >
      {/* Tabs Header */}
      <TabsList className="flex w-full flex-wrap justify-start gap-1">
        {feedback.map((tab) => (
          <TabsTrigger
            key={tab.title}
            value={tab.title}
            className={cn(
              "text-sm transition-all",
              "data-[state=active]:text-foreground"
            )}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs Content */}
        {feedback.map((tab) => (
          <TabsContent
            key={tab.title}
            value={tab.title}
            className="outline-none"
          >
            <Card className="border-border/50 bg-background/50">
              <CardContent className="text-sm leading-relaxed text-muted-foreground p-5 md:p-6">
                {tab.element}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
    </Tabs>
  );
};

export default FeedbackTabs;