import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${outfit.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
