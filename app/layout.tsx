import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeiBuNekoTech",
  description: "Scientist working on creating NekoMusume",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full flex flex-col">{children}</body>
    </html>
  );
}
