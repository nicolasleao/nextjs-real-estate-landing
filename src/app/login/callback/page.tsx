"use client";

import React, { useEffect } from "react";
import Loader from "@/app/_components/Loader";
import { useSearchParams, useRouter } from "next/navigation";

export default function LogInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const at = searchParams.get("at");
  const rt = searchParams.get("rt");

  useEffect(() => {
    if (at && rt) {
      localStorage.setItem("@immonova/at", at);
      localStorage.setItem("@immonova/rt", rt);
      router.push("/painel");
    }
  }, [at, rt]);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Loader />
    </div>
  );
}
