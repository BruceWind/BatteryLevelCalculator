import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Battery Voltage Calculator | 电池电压计算器",
    template: "%s | Battery Voltage Calculator | 电池电压计算器"
  },
  description: "Calculate battery charge based on voltage. Supports lead acid, deep cycle, and more. 根据电压估算电池剩余电量，支持铅酸电池、深循环电池等多种类型。",
  keywords: ["battery voltage chart", "lead acid battery", "deep cycle battery", "电池电压表", "铅酸电池", "深循环电池"],
};

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: 'en' | 'zh' };
}) {
  return (
    <html lang={params.lang} className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Header lang={params.lang} />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
