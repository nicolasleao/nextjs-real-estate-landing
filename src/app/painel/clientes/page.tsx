"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Menus from "../Menus";

export default function Clientes() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  return <Menus>Clientes - {type}</Menus>;
}
