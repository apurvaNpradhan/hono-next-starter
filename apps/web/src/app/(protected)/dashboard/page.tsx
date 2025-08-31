"use client";
import { authClient } from "@/lib/auth-client";
import { useQuery } from "@tanstack/react-query";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
   const router = useRouter();
   const { data: session, isPending } = authClient.useSession();

   const privateData = useQuery(trpc.user.me.queryOptions());

   useEffect(() => {
      if (!session && !isPending) {
         router.push("/sign-in");
      }
   }, [session, isPending]);

   if (isPending) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <h1>Dashboard</h1>
         <p>privateData: {privateData.data?.name}</p>
      </div>
   );
}
