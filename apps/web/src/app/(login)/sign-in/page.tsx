"use client";

import { useRouter } from "next/navigation";
import { Suspense } from "react";

import SignInForm from "@/components/sign-in-form";

export default function LoginPage() {
  const router = useRouter();

  return (
    <Suspense>
      <SignInForm onSwitchToSignUp={() => router.replace("/sign-up")} />
      ;
    </Suspense>
  );
}
