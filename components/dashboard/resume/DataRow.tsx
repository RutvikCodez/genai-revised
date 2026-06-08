export const DataRow = ({ label, icon: Icon, children, justify }: DataRowProps) => (
  <div className={`flex gap-1 items-center ${justify ? "w-full justify-between" : ""}`}>
    {Icon && <Icon />}
    {label && <span>{label}:</span>}
    <span>{children}</span>
  </div>
);