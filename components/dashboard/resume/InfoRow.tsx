export const InfoRow = ({ label, children }: InfoRowProps) => (
  <div className="flex w-full justify-between">
    <span>{label}:</span>
    <span>{children}</span>
  </div>
);