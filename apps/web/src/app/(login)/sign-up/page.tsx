"use client";

import { useRouter } from "next/navigation";

import SignUpForm from "@/components/sign-up-form";

export default function LoginPage() {
  const router = useRouter();
  return (
    <SignUpForm onSwitchToSignIn={() => router.replace("/sign-in")} />
  );
}
