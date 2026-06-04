"use client";
import Test from "./Test";
import { WizardFormPage } from "./WizardFormPage";
import GetStartedWrapper from "./GetStartedWrapper";
import { getStartedSteps } from "@/constants";

const WizardFormCS = () => {
  const steps: WizardSteps[] = [
    ...getStartedSteps.map((step) => ({
      element: <GetStartedWrapper {...step} />,
    })),

    {
      element: <Test t="Add Principal" />,
    },
  ];


  return <WizardFormPage wizardSteps={steps} />;
};

export default WizardFormCS;
