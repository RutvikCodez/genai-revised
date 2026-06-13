import FeedbackTabs from "./FeedbackTabs";
import PrepPlanTab from "./PrepPlanTab";
import SkillGapTab from "./SkillGapTab";
import TechnicalTab from "./TechnicalTab";

const TabsWrapper = ({
  technicalQuestions,
  behavioralQuestions,
  skillGaps,
  preparationDays
}: TabsWrapperProps) => {
  const feedbackTabsData = [
    {
      title: "Technical",
      element: <TechnicalTab technicalQuestions={technicalQuestions} />,
    },
    {
      title: "Behavioral",
      element: <TechnicalTab technicalQuestions={behavioralQuestions} />,
    },
    {
      title: "Skill gaps",
      element: <SkillGapTab skillGaps={skillGaps} />,
    },
    {
      title: "Prep Plan",
      element: <PrepPlanTab preparationDays={preparationDays} />,
    },
  ];
  return <FeedbackTabs feedback={feedbackTabsData} />;
};

export default TabsWrapper;
