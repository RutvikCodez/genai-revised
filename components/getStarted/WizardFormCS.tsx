import Test from "./Test";
import { WizardFormPage } from "./WizardFormPage";
import { getStartedSteps } from "@/constants";
import InformationCardWrapper from "./InformationCardWrapper";

const WizardFormCS = () => {
  const steps: WizardSteps[] = [
    ...getStartedSteps.map((step) => ({
      element: <InformationCardWrapper {...step} />,
    })),

    {
      element: <Test t="Add Principal" />,
    },
  ];


  return <WizardFormPage wizardSteps={steps} />;
};

export default WizardFormCS;
