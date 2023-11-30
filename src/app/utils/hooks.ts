import { useEffect, useCallback, useState } from "react";
import { debounce } from ".";

const getInnerWidth = () => {
    return typeof window === "undefined" ? 1280 : window.innerWidth;
}

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getInnerWidth());
    const handleWindowResize = useCallback(
        debounce(() => setWindowWidth(getInnerWidth()), 400),
        [],
    );
    useEffect(() => {
        if (typeof window != "undefined") window.addEventListener("resize", handleWindowResize);
        return () => {
            if (typeof window != "undefined") window.removeEventListener("resize", handleWindowResize);
        };
    });

    return windowWidth;
};
