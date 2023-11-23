"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";

import Sidenav from "./Sidenav";
import Loader from "@/app/_components/Loader";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const at = localStorage.getItem("@immonova/at");
    const rt = localStorage.getItem("@immonova/rt");
    if (!at || !rt) {
      window.location.href = "/login";
    } else {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader></Loader>
      </div>
    );

  return (
    <>
      <Head>
        <title>Immonova - Painel</title>
      </Head>
      <div className="">
        <div className="sidebar"></div>
        <div>
          <div className="relative overflow-x-auto mt-4">
            <div>
              <Sidenav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
