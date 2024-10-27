import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "ESTA USA pour les citoyens français - Visas US & ESTA",
  description: "ESTA USA pour les citoyens français - Visas US & ESTA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
