"use client";

import { useRouter } from "next/navigation";
import { Suspense } from "react";

import SignInForm from "@/components/sign-in-form";

export default function LoginPage() {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInForm onSwitchToSignUp={() => router.replace("/sign-up")} />
      ;
    </Suspense>
  );
}
