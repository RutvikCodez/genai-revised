import { getSessionProfile } from "@/lib/actions";
import { redirect } from "next/navigation";

const AuthLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { session, profile } = await getSessionProfile();

  if (session?.user?.id) {
    redirect(profile ? "/dashboard" : "/get-started");
  }

  return children;
};

export default AuthLayout;