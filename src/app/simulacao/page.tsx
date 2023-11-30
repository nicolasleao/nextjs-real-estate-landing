"use client";

import Image from "next/image";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setSimulation } from "@/redux/features/simulation-slice";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import download from "downloadjs";
import LogoSantander from "@/assets/lg-santander.png";
import LogoItau from "@/assets/lg-itau.png";
import LogoBradesco from "@/assets/lg-bradesco.png";
import LogoCaixa from "@/assets/lg-caixa.png";
import BotaoWhatsapp from "@/assets/botao-whatsapp.svg";
import { generateSimulationPdf } from "@/api/pdf.api";
import Loader from "../_components/Loader";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchSimulation } from "@/api/simulation.api";

const data = [
  {
    name: "Mês 1",
    Santander: 0,
    Itau: 0,
    Bradesco: 0,
    Caixa: 0,
  },
];

const logoMap = {
  Santander: LogoSantander,
  Itau: LogoItau,
  Bradesco: LogoBradesco,
  Caixa: LogoCaixa,
};
type LogoMapIndex = "Santander" | "Itau" | "Bradesco" | "Caixa";

const getSimulationPdf = async (
  e: any,
  simulationId: string | undefined,
  bankName: string,
  setDownloading: any,
) => {
  e.preventDefault();
  e.stopPropagation();
  setDownloading(true);
  await generateSimulationPdf(simulationId ?? "", bankName).then((res) => {
    if (res) {
      download(res, `Immonova - ${bankName}.pdf`, "application/pdf");
    } else {
      window.open(
        `${process.env.NEXT_PUBLIC_API_URL}/pdf/simulation/${simulationId}?bank=${bankName}`,
        "_blank",
      );
    }
    setDownloading(false);
  });
};

export default function Simulacao() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    simulationId,
    totalValue,
    downPayment,
    installments,
    simulationData,
  } = useAppSelector((state) => state.simulation);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [graphData, setGraphData] = useState(data);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (!totalValue || !downPayment || !simulationData) {
      if (id) {
        fetchSimulation(id).then((res) => {
          if (res.data && res.data.id) {
            dispatch(
              setSimulation({
                simulationId: id,
                totalValue: res.data.totalValue,
                downPayment: res.data.downPayment,
                installments: res.data.installments,
                simulationData: res.simulationData,
              }),
            );
          }
        });
      }
      return;
    }

    const parcelas = installments ?? 0;
    const incremento = Math.floor(parcelas / 12);

    const santander = simulationData.find(
      (el: any) => el.bankName == "Santander",
    );
    const itau = simulationData.find((el: any) => el.bankName == "Itau");
    const bradesco = simulationData.find(
      (el: any) => el.bankName == "Bradesco",
    );
    const caixa = simulationData.find((el: any) => el.bankName == "Caixa");

    const gD = [];
    for (let mes = 0; mes < parcelas; mes += incremento) {
      gD.push({
        name: `Mês ${mes + 1}`,
        Santander: santander.installments[mes],
        Itau: itau.installments[mes],
        Bradesco: bradesco.installments[mes],
        Caixa: caixa.installments[mes],
      });
    }

    setGraphData(gD);
  }, [installments, totalValue, downPayment, simulationData, dispatch, id]);

  if (!totalValue || !downPayment || !simulationData) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="">
        <div className="md:w-2/3 px-4 md:mx-auto mt-4 md:mt-[100px]">
          <h1 className="title-font font-medium text-4xl">
            Resultados da sua simulação
          </h1>
          <p className="leading-relaxed text-xl mt-4">
            Você está um passo mais próximo de conquistar o seu sonho.
          </p>

          <div className="relative overflow-x-auto mt-[60px]">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Banco
                  </th>
                  <th scope="col" className="px-6 py-3">
                    1ª Parcela
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ultima Parcela
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {simulationData.map(
                  (item: {
                    bankName: LogoMapIndex;
                    installments: number[];
                  }) => {
                    return (
                      <tr className="bg-white border-b" key={item.bankName}>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          <Image
                            src={logoMap[item.bankName]}
                            alt="Logo Santander"
                            width="64"
                          />
                        </td>
                        <td className="px-6 py-4">
                          {item.installments[0].toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                        <td className="px-6 py-4">
                          {item.installments[
                            item.installments.length - 1
                          ].toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                        <td className="px-6 py-4 underline text-blue-600">
                          {downloading ? (
                            <div className="ml-[20px]">
                              <Loader size={24} />
                            </div>
                          ) : (
                            <span
                              className="cursor-pointer"
                              onClick={(e) =>
                                getSimulationPdf(
                                  e,
                                  simulationId,
                                  item.bankName,
                                  setDownloading,
                                )
                              }
                            >
                              Baixar PDF
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </div>

          <div
            className="flex items-center justify-center mt-8 cursor-pointer"
            onClick={() => {
              window.open(
                `https://wa.me/${process.env.NEXT_PUBLIC_BANK_BROKER_PHONE}`,
                "_blank",
              );
            }}
          >
            <Image
              src={BotaoWhatsapp}
              alt="Botao whatsapp falar com correspondente bancário"
              width="230"
            />
          </div>

          <div className="mt-8 mb-[60px]" style={{ marginLeft: "-15px" }}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                width={1200}
                height={400}
                data={graphData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Santander" stroke="#FE0001" />
                <Line type="monotone" dataKey="Itau" stroke="#33348E" />
                <Line type="monotone" dataKey="Bradesco" stroke="#CC232A" />
                <Line type="monotone" dataKey="Caixa" stroke="#e38724" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
