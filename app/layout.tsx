import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const mono = Roboto_Mono({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Christmas Light Installation Services in Toronto | Skyshine",
  icons: {
    icon: "https://res.cloudinary.com/dlikxo3e2/image/upload/v1758813109/favicon_zqtcow.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} ${mono.className}`}>{children}</body>
    </html>
  );
}
