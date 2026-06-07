import { Card } from "../ui/card";

const GetStartedWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {children}
    </Card>
  );
};
export default GetStartedWrapper;
