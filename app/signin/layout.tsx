import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const AuthLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  if (session?.user?.email) {
    const profile = await prisma.candidateProfile.findUnique({
      where: {
        userId: session.user.id,
      },
      select: {
        id: true,
      },
    });
    if (profile) {
      redirect("/dashboard");
    }
    redirect("/get-started");
  }
  return children;  
};

export default AuthLayout;
