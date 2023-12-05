"use client";

import React from "react";
import Menus from "./Menus";
import Statistics from "./dashboard/Statistics";
import Chart from "./dashboard/LineChart";

const data = [
  {
    name: "A",
    Lucro: 100,
    Faturamento: 120,
    "Comissão": 20,
  },
  {
    name: "B",
    Lucro: 200,
    Faturamento: 220,
    "Comissão": 20,
  },
  {
    name: "C",
    Lucro: 400,
    Faturamento: 420,
    "Comissão": 20,
  },
];

export default function Dashboard() {
  return (
    <Menus>
      <div className="px-2 sm:px-12">
        <Statistics />
        <Chart data={data} title="Test Chart" grid />
      </div>
    </Menus>
  );
}
