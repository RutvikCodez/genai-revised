import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import FeedbackTabs from "./FeedbackTabs";

const TabsWrapper = () => {
  const feedbackTabsData = [
    {
      title: "Overview",
      icon: LayoutDashboard,
      element: (
        <div>
          You have <b>12 active projects</b> and <b>3 pending tasks</b>.
          <br />
          Overall progress is <b>good 🚀</b>.
        </div>
      ),
    },
    {
      title: "Analytics",
      icon: BarChart3,
      element: (
        <div>
          Page views increased by <b>25%</b> compared to last month.
          <br />
          Engagement rate is <b>high 🔥</b>.
        </div>
      ),
    },
    {
      title: "Reports",
      icon: FileText,
      element: (
        <div>
          You have <b>5 reports</b> ready for export.
          <br />
          Most recent report: <b>Interview Analysis #12</b>.
        </div>
      ),
    },
    {
      title: "Settings",
      icon: Settings,
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
