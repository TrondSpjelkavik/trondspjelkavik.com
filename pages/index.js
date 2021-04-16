import Animation from "../components/Home/Animation";
import WhoAmI from "../components/Home/WhoAmI";
import Chart from "../components/Home/Chart";
import About from "../components/Home/About";

import Router from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const useRouterLoading = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const start = () => setLoading(true);
      const end = () => setLoading(false);
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);
      return () => {
        Router.events.off("routeChangeStart", start);
        Router.events.off("routeChangeComplete", end);
        Router.events.off("routeChangeError", end);
      };
    }, []);
    return loading;
  };

  return (
    <>
      <Animation></Animation>
      <WhoAmI></WhoAmI>
      <Chart></Chart>
      <About></About>
    </>
  );
}
