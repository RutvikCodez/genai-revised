"use client";
import Test from "./Test";
import { WizardFormPage } from "./WizardFormPage";
import GetStartedWrapper from "./GetStartedWrapper";

const WizardFormCS = () => {

  const steps: WizardSteps[] = [
    {
      element: (
        <GetStartedWrapper
          title="Welcome to Interview Prep"
          description="Get started with our AI-powered interview preparation tools."
          imageUrl="/interview-prep.jpg"
          tagline="AI-Powered Interview Preparation"
        />
      ),
    },
    {
      element: <Test t="Course Setup" />,
    },
    {
      element: <Test t="What's Next" />,
    },
    {
      element: <Test t="Add Principal" />,
    },
    {
      element: <Test t="Add Admin" />,
    },
  ];

  return <WizardFormPage wizardSteps={steps} />;
};

export default WizardFormCS;
