"use client";
import React, { useContext } from "react";
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";

type typesforWizardFormContext = {
  currentStep: number;
  jumpToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  data: unknown;
  setData: React.Dispatch<React.SetStateAction<unknown>>;
};
const WizardFormContext = createContext<typesforWizardFormContext | null>(null);
const WizardFormProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [data, setData] = useState<unknown>(null);
  const jumpToStep = (step: number) => setCurrentStep(step);
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  return (
    <WizardFormContext.Provider
      value={{
        currentStep,
        jumpToStep,
        nextStep,
        prevStep,
        data,
        setData,
      }}
    >
      {children}
    </WizardFormContext.Provider>
  );
};
export default WizardFormProvider;

export const useWizardFormContext = () => {
  const context = useContext(WizardFormContext);
  if (!context) {
    throw new Error(
      "useWizardFormContext must be used within a WizardFormProvider"
    );
  }
  return context;
};