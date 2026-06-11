import FeedbackTabs from "./FeedbackTabs";
import TechnicalTab from "./TechnicalTab";

const TabsWrapper = ({ technicalQuestions }: TabsWrapperProps) => {
  const feedbackTabsData = [
    {
      title: "Technical",
      element: <TechnicalTab technicalQuestions={technicalQuestions} />,
    },
    {
      title: "Behavioral",
      element: (
        <div>
          Page views increased by <b>25%</b> compared to last month.
          <br />
          Engagement rate is <b>high 🔥</b>.
        </div>
      ),
    },
    {
      title: "Skill gaps",
      element: (
        <div>
          You have <b>5 reports</b> ready for export.
          <br />
          Most recent report: <b>Interview Analysis #12</b>.
        </div>
      ),
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
