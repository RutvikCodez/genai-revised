export const DateRange = ({ startDate, endDate, currentlyWorking }: DateRangeProps) => (
  <>{startDate.toDateString()} — {currentlyWorking ? "Present" : endDate?.toDateString()}</>
);