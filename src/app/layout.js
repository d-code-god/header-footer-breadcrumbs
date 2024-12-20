import Header from "../component/Header";
import Footer from "../component/Footer";
import { ThemeProvider } from "next-themes";
import "../app/styles/globals.css";

export const metadata = {
  title: "Header and Footer Project",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
