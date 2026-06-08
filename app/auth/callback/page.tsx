import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signin");
  }

  const profile = await prisma.candidateProfile?.findUnique({
    where: {
      userId: session.user.id,
    },
    select: {
      id: true,
    },
  });

  redirect(profile ? "/dashboard" : "/get-started");
};

export default AuthCallbackPage;
