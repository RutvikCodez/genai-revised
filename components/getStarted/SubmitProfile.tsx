"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

import { createCandidateProfile } from "@/lib/actions";
import { useWizardFormContext } from "@/app/context/WizardFormContext";

const SubmitProfile = () => {
  const router = useRouter();
  const { data } = useWizardFormContext();

  const [status, setStatus] = useState<
    "loading" | "success" | "error"
  >("loading");

  useEffect(() => {
    let isMounted = true;

    const submit = async () => {
      try {
        setStatus("loading");

        await createCandidateProfile(data);

        if (!isMounted) return;

        setStatus("success");

        // small UX delay for feedback (feels premium)
        setTimeout(() => {
          router.push("/dashboard");
        }, 800);
      } catch (err) {
        if (!isMounted) return;

        console.error("Profile creation failed:", err);
        setStatus("error");
      }
    };

    submit();

    return () => {
      isMounted = false;
    };
  }, [data, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      {/* Loading */}
      {status === "loading" && (
        <>
          <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
          <h2 className="text-lg font-semibold">
            Creating your profile...
          </h2>
          <p className="text-sm text-muted-foreground">
            Please wait while we set things up for you.
          </p>
        </>
      )}

      {/* Success */}
      {status === "success" && (
        <>
          <CheckCircle2 className="h-10 w-10 text-foreground" />
          <h2 className="text-lg font-semibold">
            Profile ready!
          </h2>
          <p className="text-sm text-muted-foreground">
            Redirecting to your dashboard...
          </p>
        </>
      )}

      {/* Error */}
      {status === "error" && (
        <>
          <AlertCircle className="h-10 w-10 text-muted-foreground" />
          <h2 className="text-lg font-semibold">
            Something went wrong
          </h2>
          <p className="text-sm text-muted-foreground">
            Please try again or refresh the page.
          </p>
        </>
      )}
    </div>
  );
};

export default SubmitProfile;