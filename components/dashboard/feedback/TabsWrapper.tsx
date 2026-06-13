import FeedbackTabs from "./FeedbackTabs";
import SkillGapTab from "./SkillGapTab";
import TechnicalTab from "./TechnicalTab";

const TabsWrapper = ({
  technicalQuestions,
  behavioralQuestions,
  skillGaps
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
      element: (
        <div>
          Manage notifications, security, and theme preferences.
          <br />
          Current theme: <b>Dark Mode 🌙</b>.
        </div>
      ),
    },
  ];
  return <FeedbackTabs feedback={feedbackTabsData} />;
};

export default TabsWrapper;
