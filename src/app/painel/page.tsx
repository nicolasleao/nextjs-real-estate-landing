"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";

import Sidenav from "./Sidenav";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  useEffect(() => {
    const at = localStorage.getItem("@immonova/at");
    const rt = localStorage.getItem("@immonova/rt");
    if (!at || !rt) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <>
      <Head>
        <title>Immonova - Painel</title>
      </Head>
      <div className="">
        <div className="sidebar"></div>
        <div className="md:w-2/3 px-4 md:mx-auto mt-4 md:mt-[100px]">
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

Dashboard.getLayout = (page: any) => page;
