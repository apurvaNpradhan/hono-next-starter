"use client";

import SignUpForm from "@/components/sign-up-form";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";

export default function LoginPage() {
   const router = useRouter();
   return (
      <Suspense>
         <SignUpForm onSwitchToSignIn={() => router.replace("/sign-in")} />
      </Suspense>
   );
}
