import { requireProfile } from "@/lib/actions";
import { redirect } from "next/navigation";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { profile } = await requireProfile();

  if (!profile) {
    return redirect("/get-started");
  }
  return children;
};

export default DashboardLayout;
