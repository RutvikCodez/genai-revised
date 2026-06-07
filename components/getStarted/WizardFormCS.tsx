import { WizardFormPage } from "./WizardFormPage";
import { getStartedSteps } from "@/constants";
import InformationCardWrapper from "./InformationCardWrapper";
import GetStartedFormWrapper from "./GetStartedFormWrapper";
import ContactInformation from "./ContactInformation";
import ResumeAndLinks from "./ResumeAndLinks";
import WorkHistory from "./WorkHistory";

const WizardFormCS = () => {
  const steps: WizardSteps[] = [
    ...getStartedSteps.map((step) => ({
      element: <InformationCardWrapper {...step} />,
    })),

    {
      element: <GetStartedFormWrapper />,
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
  ];

  return <WizardFormPage wizardSteps={steps} />;
};

export default WizardFormCS;
