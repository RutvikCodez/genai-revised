export function formatSkillGaps(skillGaps: {
  severity: "low" | "medium" | "high";
}[]) {
  const counts = skillGaps.reduce(
    (acc, gap) => {
      acc[gap.severity] = (acc[gap.severity] || 0) + 1;
      return acc;
    },
    { low: 0, medium: 0, high: 0 }
  );

  const parts = [];

  if (counts.high) parts.push(`${counts.high} high`);
  if (counts.medium) parts.push(`${counts.medium} medium`);
  if (counts.low) parts.push(`${counts.low} low`);

  return parts.join(" · ");
}