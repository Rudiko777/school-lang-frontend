import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider/ReduxProvider";
import {PersistGate} from "redux-persist/integration/react";
import {persister} from "@/redux/store";

export const metadata: Metadata = {
  title: "School-Languages",
  description: "School-Languages - best investment",
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
