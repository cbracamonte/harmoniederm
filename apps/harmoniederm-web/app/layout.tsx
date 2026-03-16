import { SeoHead } from "@/lib/seo";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background antialiased">
        <SeoHead />
        {children}
      </body>
    </html>
  );
}
