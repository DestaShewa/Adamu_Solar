import "./globals.css";

export const metadata = {
  title: "Adamu Solar | Reliable Solar Solutions",
  description:
    "Solar installation, system design, maintenance, and consultation in Arba Minch, Ethiopia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
