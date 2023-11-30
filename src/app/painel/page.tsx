"use client";

import React from "react";
import Menus from "./Menus";
import Statistics from "./dashboard/Statistics";

export default function Dashboard() {
  return (
    <Menus>
      <Statistics />
    </Menus>
  );
}
