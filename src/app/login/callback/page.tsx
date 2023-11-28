"use client";

import React, { useEffect } from "react";
import Loader from "@/app/_components/Loader";
import { useSearchParams, useRouter } from "next/navigation";
import { setTokensToStorage } from "@/app/utils/auth";

export default function LogInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const at = searchParams.get("at");
  const rt = searchParams.get("rt");
  const exp = searchParams.get("exp");

  useEffect(() => {
    if (at && rt && exp) {
      setTokensToStorage(at, rt, exp)
      router.push("/painel");
    } else {
      router.push("/login");
    }
  }, [at, rt, router]);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Loader />
    </div>
  );
}
