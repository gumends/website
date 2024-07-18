import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website",
  description: "Website criado com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} width-100vw h-full flex justify-center items-center`}>
        <Box
          sx={{
            minWidth: "1400px",
            bgcolor: "red",
          }}
        >{children}</Box>
      </body>
    </html>
  );
}
