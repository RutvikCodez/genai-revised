import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SquareUserRound } from "lucide-react";

const ContactInformationCard = ({
  addressLine1,
  addressLine2,
  phone,
  email,
}: WizardFormData) => {
  return (
    <Card>
      <CardHeader className="text-center flex w-full justify-center items-center">
        <CardTitle className="flex gap-2 items-center">
          <SquareUserRound />
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1 w-full justify-between">
        <div className="flex w-full justify-between">
          <span>Address:</span>
          <span className="flex flex-col gap-1">
            {addressLine1} {addressLine2}
          </span>
        </div>
        <div className="flex w-full justify-between">
          <span>Phone:</span>
          <span>{phone}</span>
        </div>
        <div className="flex w-full justify-between">
          <span>Email:</span>
          <span>{email}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInformationCard;
