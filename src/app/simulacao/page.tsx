"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { financiarSac } from "@/app/utils/simulator";
import { useEffect, useState } from "react";
import LogoSantander from "@/assets/lg-santander.png";
import LogoItau from "@/assets/lg-itau.png";
import LogoBradesco from "@/assets/lg-bradesco.png";
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



const data = [
  {
    name: "Page A",
    Santander: 4000,
    Itau: 2400,
    Bradesco: 2400,
  },
  {
    name: "Page B",
    Santander: 3000,
    Itau: 1398,
    Bradesco: 2210,
  },
  {
    name: "Page C",
    Santander: 2000,
    Itau: 9800,
    Bradesco: 2290,
  },
  {
    name: "Page D",
    Santander: 2780,
    Itau: 3908,
    Bradesco: 2000,
  },
  {
    name: "Page E",
    Santander: 1890,
    Itau: 4800,
    Bradesco: 2181,
  },
  {
    name: "Page F",
    Santander: 2390,
    Itau: 3800,
    Bradesco: 2500,
  },
  {
    name: "Page G",
    Santander: 3490,
    Itau: 4300,
    Bradesco: 2100,
  },
];

export default function Simulacao() {
  const searchParams = useSearchParams();
  const vP = searchParams.get("vP");
  const n = searchParams.get("n");
  const [graphData, setGraphData] = useState(data);
  const [valores, setValores] = useState({
    santander: {
      primeira: 0,
      ultima: 0,
      juros: "0",
    },
    itau: {
      primeira: 0,
      ultima: 0,
      juros: "0",
    },
    bradesco: {
      primeira: 0,
      ultima: 0,
      juros: "0",
    },
  });

  useEffect(() => {
    const valor = vP ? parseFloat(vP) : 0;
    const parcelas = n ? parseInt(n) : 0;
    const incremento = Math.floor(parcelas / 12);

    const santander = financiarSac(valor, parcelas, 1.025 / 100);
    const itau = financiarSac(valor, parcelas, 0.89 / 100);
    const bradesco = financiarSac(valor, parcelas, 0.916 / 100);

    setValores({
      santander: {
        primeira: santander.parcelas[0],
        ultima: santander.parcelas[parcelas - 1],
        juros: (1.025 * 12).toFixed(2),
      },
      itau: {
        primeira: itau.parcelas[0],
        ultima: itau.parcelas[parcelas - 1],
        juros: (0.891 * 12).toFixed(2),
      },
      bradesco: {
        primeira: bradesco.parcelas[0],
        ultima: bradesco.parcelas[parcelas - 1],
        juros: (0.916 * 12).toFixed(2),
      },
    });

    const gD = [];

    for (let mes = 0; mes < parcelas; mes += incremento) {
      gD.push({
        name: `Mês ${mes + 1}`,
        Santander: santander.parcelas[mes],
        Itau: itau.parcelas[mes],
        Bradesco: bradesco.parcelas[mes],
      });
    }

    setGraphData(gD);
  }, [n, vP]);

  return (
    <>
      <Head>
        <title>Immonova - Simulação</title>
      </Head>
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
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <Image
                      src={LogoSantander}
                      alt="Logo Santander"
                      width="64"
                    />
                  </th>
                  <td className="px-6 py-4">R$ {valores.santander.primeira}</td>
                  <td className="px-6 py-4">R$ {valores.santander.ultima}</td>
                  <td className="px-6 py-4 underline text-blue-600">
                    <a href="#">Baixar PDF</a>
                  </td>
                </tr>

                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <Image src={LogoItau} alt="Logo Itau" width="64" />
                  </th>
                  <td className="px-6 py-4">R$ {valores.itau.primeira}</td>
                  <td className="px-6 py-4">R$ {valores.itau.ultima}</td>
                  <td className="px-6 py-4 underline text-blue-600">
                    <a href="#">Baixar PDF</a>
                  </td>
                </tr>

                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <Image src={LogoBradesco} alt="Logo Bradesco" width="64" />
                  </th>
                  <td className="px-6 py-4">R$ {valores.bradesco.primeira}</td>
                  <td className="px-6 py-4">R$ {valores.bradesco.ultima}</td>
                  <td className="px-6 py-4 underline text-blue-600">
                    <a href="#">Baixar PDF</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-[60px] mb-[60px]">
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
                <Line
                  type="monotone"
                  dataKey="Itau"
                  stroke="#33348E"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="Bradesco" stroke="#CC232A" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
