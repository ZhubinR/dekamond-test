import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "تست دکاموند",
  description: "احراز هویت و داشبورد ساده با استفاده از Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body dir="rtl">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
