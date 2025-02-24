import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "pagina-visualContact",
  description: "Esta pagina esta hecha para mostrar mi conocimiento en desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/bag.svg" />
      </head>
      <body
        className="bg-gray-100 font-sans antialiased overflow-hidden"
      >
        {children}
      </body>
    </html>
  );
}
