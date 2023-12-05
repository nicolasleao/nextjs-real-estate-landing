"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { extractGoogleMapsAddress } from "@/app/utils";

interface GoogleMapProps {
    initialPosition: {lat: number, lng: number},
    onLocationChange: any,
}

export default function GoogleMapsSearch({ initialPosition, onLocationChange }: GoogleMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const initMap = async () => {
            console.log('Initializing google maps api');
            
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps');
            const { SearchBox } = await loader.importLibrary('places');
            const { Marker } = await loader.importLibrary('marker');

            const mapOptions: google.maps.MapOptions = {
                center: initialPosition,
                zoom: 15,
                mapId: 'MY_NEXTJS_MAPID'
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
            const searchBox = new SearchBox(inputRef.current as HTMLInputElement);

            map.addListener("bounds_changed", () => {
                searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
            });

            let markers: google.maps.Marker[] = [];

            searchBox.addListener("places_changed", () => {
                const places = searchBox.getPlaces();

                if (!places || places.length == 0) {
                    return;
                }

                // Clear out the old markers.
                markers.forEach((marker) => {
                marker.setMap(null);
                });
                markers = [];

                // For each place, get the icon, name and location.
                const bounds = new google.maps.LatLngBounds();

                places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                // Create a marker for each place.
                markers.push(
                    new google.maps.Marker({
                    map,
                    title: place.name,
                    position: place.geometry.location,
                    })
                );

                onLocationChange({
                    ...extractGoogleMapsAddress(place),
                    lat: place.geometry.location.lat(),
                    lon: place.geometry.location.lng(),
                })

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
        };
        initMap();
    }, []);

    return (
        <>
            <input
                type="text"
                ref={inputRef}
                className="google-maps-searchbox"
                placeholder="Pesquisar endereço"
            />
            <div
                ref={mapRef}
                style={{
                    height: '400px',
                }}
            />
        </>
    );
}
