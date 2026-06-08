export const MetaItem = ({ icon: Icon, children }: MetaItemProps) => (
  <div className="flex gap-1 items-center">
    <Icon />
    <span>{children}</span>
  </div>
);