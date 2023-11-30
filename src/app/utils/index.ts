import { useEffect, useCallback, useState } from "react";

export const debounce = (callback: any, timeout = 300) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, timeout);
  };
};

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowResize = useCallback(
    debounce(() => setWindowWidth(window.innerWidth), 400),
    [],
  );
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return windowWidth;
};
