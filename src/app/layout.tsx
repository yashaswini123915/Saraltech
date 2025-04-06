import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admin"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100">
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
