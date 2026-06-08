import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearchCorner } from "lucide-react";

const WebsiteAndSkills = ({ linkedin, skills }: WizardFormData) => {
  return (
    <Card>
      <CardHeader className="text-center flex w-full justify-center items-center">
        <CardTitle className="flex gap-2 items-center">
          <FileSearchCorner />
          Websites & Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1 w-full justify-between">
        <div className="flex w-full justify-between">
          <span>Linkedin:</span>
          <span>{linkedin}</span>
        </div>
       <div className="flex w-full justify-between">
        <span>Skills:</span>
        <div className="flex flex-wrap gap-2">
             {skills?.length && skills.map((skill,index)=>(
            <Badge key={index}>{skill}</Badge>
        ))}
        </div>
       </div>
      </CardContent>
    </Card>
  );
};

export default WebsiteAndSkills;
