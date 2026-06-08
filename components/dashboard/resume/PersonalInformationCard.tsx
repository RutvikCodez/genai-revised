import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";

const PersonalInformationCard = ({ firstName, lastName }: WizardFormData) => {
  return (
    <Card>
      <CardHeader className="text-center flex w-full justify-center items-center">
        <CardTitle className="flex gap-2 items-center">
          <CircleUserRound />
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="flex w-full justify-between">
        <span>Legal Name:</span>
        <span>
          {firstName} {lastName}
        </span>
      </CardContent>
    </Card>
  );
};

export default PersonalInformationCard;
