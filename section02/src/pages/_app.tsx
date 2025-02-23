import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <GlobalLayout>
      {/* children으로 넘기기 */}
      <Component {...pageProps}/>
    </GlobalLayout>
  )
}
