import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-M7RVN0E9HB" />  {/* 換成你的 ID */}
    </html>
  )
}

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Daisy Yang Portfolio",
  description: "Web Design, UI/UX, and Graphic Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      <body className="antialiased font-geist" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
