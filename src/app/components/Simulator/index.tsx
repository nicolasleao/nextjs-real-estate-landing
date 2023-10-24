import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

import Loader from "../Loader";

const getSimulationLink = (totalValue: number, installments: number) => {
  return `/simulacao?vP=${totalValue}&n=${installments}`;
};

export default function Simulator() {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const emailInputRef = useRef(null);
  const { push } = useRouter();

  const nextStep = () => {
    let data = formData as any;
    if (data.name && data.email) {
      setLoading(true);
      const vP = parseFloat(data.value) - parseFloat(data.initial);
      const n = parseInt(data.years) * 12;
      console.log({
        msg: "Dados do Usuário",
        formData: formData,
      });
      push(getSimulationLink(vP, n));
    } else {
      setCurrentStep(1);
    }
  };

  const updateFormData = (key: string, value: any) => {
    const data = formData as any;
    data[key] = value;
    setFormData(data);
  };

  useEffect(() => {
    if (emailInputRef.current) {
      (emailInputRef.current as any).value = "";
    }
  }, [currentStep]);

  if (loading) {
    return (
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col py-[130px] flex items-center align-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      {currentStep === 0 ? (
        <>
          <h2 className="text-gray-900 text-center text-2xl font-bold title-font mb-5">
            Faça uma simulação
          </h2>
          <div className="relative mb-4">
            <label htmlFor="price" className="leading-7 text-sm text-gray-600">
              Valor do Imóvel
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">R$&ensp;</span>
              </div>
              <input
                onChange={(e) => updateFormData("value", e.target.value)}
                type="text"
                name="price"
                id="price"
                className="w-full bg-white rounded border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green text-base outline-none text-gray-700 py-1.5 pl-8 pr-20 leading-8 transition-colors duration-200"
                placeholder="0.00"
              />
            </div>

            <label
              htmlFor="initial"
              className="leading-7 text-sm text-gray-600"
            >
              Entrada
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">R$&ensp;</span>
              </div>
              <input
                onChange={(e) => updateFormData("initial", e.target.value)}
                type="text"
                name="initial"
                id="initial"
                className="w-full bg-white rounded border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green text-base outline-none text-gray-700 py-1.5 pl-8 pr-20 leading-8 transition-colors duration-200"
                placeholder="30.000"
              />
            </div>

            <label
              htmlFor="installments"
              className="leading-7 text-sm text-gray-600"
            >
              Prazo em anos
            </label>
            <input
              onChange={(e) => updateFormData("years", e.target.value)}
              type="text"
              name="installments"
              id="installments"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green text-base outline-none text-gray-700 py-1.5 pl-4 pr-20 leading-8 transition-colors duration-200"
              placeholder="35"
            />
          </div>
        </>
      ) : (
        <>
          <h2 className="text-gray-900 text-center text-2xl font-bold title-font mb-5">
            Quase lá
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nome
            </label>
            <input
              onChange={(e) => updateFormData("name", e.target.value)}
              type="text"
              name="name"
              id="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green text-base outline-none text-gray-700 py-1.5 pl-4 pr-20 leading-8 transition-colors duration-200"
              placeholder="João da Silva"
            />

            <label htmlFor="cpf" className="leading-7 text-sm text-gray-600">
              CPF
            </label>
            <input
              onChange={(e) => updateFormData("cpf", e.target.value)}
              type="text"
              name="cpf"
              id="cpf"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green text-base outline-none text-gray-700 py-1.5 pl-4 pr-20 leading-8 transition-colors duration-200"
              placeholder="000.000.000-00"
            />

            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              onChange={(e) => updateFormData("email", e.target.value)}
              type="email"
              name="email"
              id="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green text-base outline-none text-gray-700 py-1.5 pl-4 pr-20 leading-8 transition-colors duration-200"
              placeholder="exemplo@gmail.com"
              ref={emailInputRef}
            />
          </div>
        </>
      )}

      <button
        onClick={() => nextStep()}
        className="text-white bg-primary-green border-0 py-2 px-8 focus:outline-none hover:bg-primary-green rounded text-lg"
      >
        {currentStep === 0 ? "Proximo" : "Ver Simulação"}
      </button>
      <p className="text-xs text-gray-500 mt-3">
        Faça uma simulação rápida das parcelas do seu financiamento.
      </p>
    </div>
  );
}
