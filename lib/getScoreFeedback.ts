export function getScoreFeedback(score: number) {
  if (score >= 90) {
    return {
      label: "Excellent",
      range: "90-100",
    };
  }

  if (score >= 70) {
    return {
      label: "Strong Fit",
      range: "70-89",
    };
  }

  if (score >= 50) {
    return {
      label: "Moderate Fit",
      range: "50-69",
    };
  }

  if (score >= 30) {
    return {
      label: "Weak Match",
      range: "30-49",
    };
  }

  return {
    label: "Poor Match",
    range: "0-29",
  };
}
