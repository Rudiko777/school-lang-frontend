import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/processes/redux/ReduxProvider/ReduxProvider";

export const metadata: Metadata = {
  title: "School-Languages",
  description: "School-Languages - best investment",
  icons: {
    icon: 'favicon.png'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
            {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
