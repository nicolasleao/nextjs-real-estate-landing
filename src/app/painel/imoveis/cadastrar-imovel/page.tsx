"use client";

import React, { useEffect, useState, useRef } from "react";

import Menus from "../../Menus";
import GoogleMap from "@/app/_components/maps/GoogleMapsSearch";

export default function Imoveis() {
  useEffect(() => {}, []);

  const onLocationChange = (location: any) => {
    console.log(location);
  };

  return (
    <Menus>
      <div className="p-3 w-full h-full">
        <h1 className="text-2xl">Cadastrar Imovel</h1>
        <GoogleMap
          initialPosition={{ lat: -9.665308346172761, lng: -35.73474698335957 }}
          onLocationChange={onLocationChange}
        />
      </div>
    </Menus>
  );
}
