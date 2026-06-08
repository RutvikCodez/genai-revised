import { WizardFormPage } from "./WizardFormPage";
import { getStartedSteps } from "@/constants";
import InformationCardWrapper from "./InformationCardWrapper";
import ContactInformation from "./ContactInformation";
import ResumeAndLinks from "./ResumeAndLinks";
import WorkHistory from "./WorkHistory";
import EducationHistory from "./EducationHistory";
import PersonalInfomation from "./PersonalInfomation";
import SubmitProfile from "./SubmitProfile";

const WizardFormCS = () => {
  const steps: WizardSteps[] = [
    ...getStartedSteps.map((step) => ({
      element: <InformationCardWrapper {...step} />,
    })),

    {
      element: <PersonalInfomation />,
    },
    {
      element: <ContactInformation />,
    },
    {
      element: <ResumeAndLinks />,
    },
    {
      element: <WorkHistory />,
    },
    {
      element: <EducationHistory />,
    },
    {
      element: <SubmitProfile />,
    },
  ];

  return <WizardFormPage wizardSteps={steps} />;
};

export default WizardFormCS;
