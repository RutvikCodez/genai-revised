import { requireProfile } from "@/lib/actions";
import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {
  const { profile } = await requireProfile();

  redirect(profile ? "/dashboard" : "/get-started");
};

export default AuthCallbackPage;
