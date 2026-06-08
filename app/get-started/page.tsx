import WizardFormCS from "@/components/getStarted/WizardFormCS";
import { requireProfile } from "@/lib/actions";
import { redirect } from "next/navigation";

const page = async () => {
  const { profile } = await requireProfile();

  if (profile) {
    return redirect("/dashboard");
  }
  return <WizardFormCS />;
};

export default page;
