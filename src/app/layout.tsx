import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Portfólio | Gabriel Evangelista',
  description: "Portfólio profissional de Gabriel Evangelista",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${poppins.className} antialiased text-[16px] bg-gray-50 dark:bg-zinc-800 light:bg-zinc-100 text-black dark:text-white transition-colors duration-500`}
      >
         <ThemeProvider>
          <div className="px-[30px]">
            <Header />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
