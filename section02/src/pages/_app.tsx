import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  const onClickButton = () =>{
    router.push("/test");
  };
  
  return (
    <div>
      <Link href={"/"}>index</Link>
      &nbsp;
      <Link href={"/search"}>search</Link>
      &nbsp;
      <Link href={"/book/1"}>book</Link>
      &nbsp;
      <div>
        <button onClick={onClickButton}>/test 페이지 이동</button>
      </div>
      <Component {...pageProps} />  
    </div>

  )
}
