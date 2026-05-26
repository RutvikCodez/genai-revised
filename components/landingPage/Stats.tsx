import { statsData } from "@/constants";
import Counter from "./Counter";
import { cn } from "@/lib/utils";

const Stats = () => {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {statsData.map(({ end, suffix, label, color }) => (
            <div key={label} className="text-center flex flex-col gap-2">
              <div className={cn("text-5xl font-bold", color)}>
                <Counter end={end} duration={2} suffix={suffix} />
              </div>
              <p className="text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
