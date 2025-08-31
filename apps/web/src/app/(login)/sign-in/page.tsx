"use client";

import SignInForm from "@/components/sign-in-form";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function LoginPage() {
   const router = useRouter();

   return (
      <Suspense>
         <SignInForm onSwitchToSignUp={() => router.replace("/sign-up")} />;
      </Suspense>
   );
}
