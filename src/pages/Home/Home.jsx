import React, { useState, useEffect } from "react";
import { HomeXS } from "./HomeXS";
import { HomeMD } from "./HomeMD";
import { HomeXL } from "./HomeXL";

export const Home = () => {
  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  if (size.width < 1024 && size.width > 540) {
    return <HomeMD />;
  }

  if (size.width > 1024 && size.width < 3200) {
    return <HomeXL />;
  }

  return size.width < 540 && <HomeXS />;
};
