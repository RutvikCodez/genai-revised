import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

const TechnicalTab = ({
  technicalQuestions,
}: {
  technicalQuestions: TechnicalQuestionsProps[];
}) => {
  return (
    <Accordion
      type="multiple"
      className="w-full space-y-4"
    >
      {technicalQuestions.map((q) => (
        <Card
          key={q.id}
          className={cn(
            "overflow-hidden border-border/50 transition-colors"
          )}
        >
          <AccordionItem value={q.id} className="border-none">
            {/* Trigger */}
            <AccordionTrigger className="px-5 py-4 text-left text-sm font-medium leading-relaxed hover:no-underline">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">
                  Q{q.order}
                </span>
                <span className="text-base">
                  {q.question}
                </span>
              </div>
            </AccordionTrigger>

            {/* Content */}
            <AccordionContent className="px-5 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed">
              <div className="flex flex-col gap-4">
                {/* Intention */}
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Intention
                  </p>
                  <p>{q.intention}</p>
                </div>

                {/* Answer */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Answer
                  </p>

                  <div className="prose prose-sm max-w-none text-foreground">
                    <ReactMarkdown>{q.answer}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Card>
      ))}
    </Accordion>
  );
};

export default TechnicalTab;