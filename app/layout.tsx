import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "HeiBuNekoTech",
  description: "Scientist working on creating NekoMusume",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSansSC.variable} h-full antialiased`}>
      <body className="flex h-full flex-col">{children}</body>
    </html>
  );
}
