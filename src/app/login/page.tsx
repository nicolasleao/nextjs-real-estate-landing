"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";
import LogInForm from "./LogInForm";

export default function Login() {
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  useEffect(() => {
    // componentDidMount
  }, []);

  return (
    <>
      <Head>
        <title>Immonova - Login</title>
      </Head>
      <div className="">
        <div className="md:w-2/3 px-4 md:mx-auto mt-4 md:mt-[100px]">
          <div className="relative overflow-x-auto mt-4">
            <LogInForm />
          </div>
        </div>
      </div>
    </>
  );
}
