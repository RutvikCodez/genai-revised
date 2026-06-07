import { WizardFormPage } from "./WizardFormPage";
import { getStartedSteps } from "@/constants";
import InformationCardWrapper from "./InformationCardWrapper";
import GetStartedFormWrapper from "./GetStartedFormWrapper";
import ContactInformation from "./ContactInformation";

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
  ];

  return <WizardFormPage wizardSteps={steps} />;
};

export default WizardFormCS;
