"use client";

import { useRouter } from "next/navigation";
import { Suspense } from "react";

import SignUpForm from "@/components/sign-up-form";

export default function LoginPage() {
  const router = useRouter();
  return (
    <Suspense>
      <SignUpForm onSwitchToSignIn={() => router.replace("/sign-in")} />
    </Suspense>
  );
}
