"use client";

import React, { useEffect, useState, useRef } from "react";

import Menus from "../../Menus";
import GoogleMap from "@/app/_components/Maps/GoogleMapsSearch";

export default function Imoveis() {
    useEffect(() => {
    }, []);

    const onLocationChange = (location: any) => {
        console.log(location);
    }

    return (
        <Menus>
            <div className="p-3 w-full h-full">
                <h1 className="text-2xl">Criar Imovel</h1>
                <GoogleMap
                    initialPosition={{ lat: -9.6622582, lng: -35.6969714 }}
                    onLocationChange={onLocationChange}
                />
            </div>
        </Menus>
    );
}
