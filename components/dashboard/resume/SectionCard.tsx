import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SectionCard = ({ icon: Icon, title, children, className }: SectionCardProps) => (
  <Card className={className}>
    <CardHeader className="text-center flex w-full justify-center items-center">
      <CardTitle className="flex gap-2 items-center">
        <Icon />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-1 w-full">{children}</CardContent>
  </Card>
);

