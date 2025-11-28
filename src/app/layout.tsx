import type { Metadata } from "next";
import "./globals.css";
import Shell from "./shell";

export const metadata: Metadata = {
  title: "Adelina Martinez",
  description: "work in progress...",
  icons: {
    icon: '/star.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}