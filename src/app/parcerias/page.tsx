"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";
import SignUpForm from "./SignUpForm";

export default function Parcerias() {
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
        <title>Immonova - Parcerias</title>
      </Head>
      <div className="">
        <div className="md:w-2/3 px-4 md:mx-auto mt-4 md:mt-[100px]">
          <h1 className="title-font font-medium text-4xl">
            Seja um corretor parceiro
          </h1>
          <p className="leading-relaxed text-xl mt-4">
            Descubra um leque de ferramentas para impulsionar suas vendas, e
            ganhe uma página própria com um simulador de financiamento
            integrado.
          </p>

          <div className="relative overflow-x-auto mt-4">
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
}
