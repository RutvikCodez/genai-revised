"use client";
import { useWizardFormContext } from "@/app/context/WizardFormContext";
import WizardForm from "./WizardForm";

export const WizardFormPage = ({
  wizardSteps,
}: {
  wizardSteps: WizardSteps[];
}) => {
  const { currentStep } = useWizardFormContext();


  return <WizardForm currentStep={7} Steps={wizardSteps} />;
};


