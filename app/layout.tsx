import type { Metadata } from "next";
import {
  gilroyBold,
  gilroyLight,
  gilroyRegular,
  gilroySemiBold,
  kgBlankSketch,
  kgBlankSolid,
} from "@/font/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chef Irina Website",
  description:
    "Chef Irina Restaurant - Coming Soon! Delight in a culinary journey like no other. Our website is under construction, but stay tuned for a taste of exquisite dishes, world-class service, and an unforgettable dining experience. Visit us again soon!",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gilroyBold.variable} ${gilroyLight.variable} ${gilroyRegular.variable} ${gilroySemiBold.variable} ${kgBlankSolid.variable} ${kgBlankSketch.variable}`}
    >
      <body className="bg-white">{children}</body>
    </html>
  );
}
