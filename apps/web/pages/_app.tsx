import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            padding: 0;
            margin: 0;
          }
          #__next {
            font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial,
              sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
              "Segoe UI Symbol";
            color: white;
            min-height: 100vh;
            background-color: black;
            display: grid;
            place-items: center;
          }
        `}
      </style>
    </>
  );
}
