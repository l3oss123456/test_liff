import { useEffect } from "react";
// import liff from "@line/liff";
import "../styles/globals.css";

const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

function MyApp({ Component, pageProps }) {
  // useEffect(async () => {
  //   // const liff = (await import("@line/liff")).default;
  //   const liff = await import("@line/liff").default;
  //   try {
  //     await liff.init({ liffId });
  //     console.log("liffliff;", liff);
  //   } catch (error) {
  //     console.error("liff init error", error.message);
  //   }
  //   if (!liff.isLoggedIn()) {
  //     liff.login();
  //   }
  // }, []);

  useEffect(() => {
    initLiff();
  });

  const initLiff = async () => {
    const liff = (await import("@line/liff")).default;
    // const liff = await import("@line/liff").default;
    try {
      await liff.init({ liffId });
      console.log("liffliff;", liff);
    } catch (error) {
      console.error("liff init error", error.message);
    }
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  };

  return <Component {...pageProps} />;
}

export default MyApp;
