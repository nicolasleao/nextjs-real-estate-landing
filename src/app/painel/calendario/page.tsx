"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Menus from "../Menus";

export default function Calendario() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  return <Menus>Calendário - {mode}</Menus>;
}
