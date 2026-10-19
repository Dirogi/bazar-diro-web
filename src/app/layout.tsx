import type { Metadata } from "next";
import { ShopProvider } from "@/components/shop/shop-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bazar Diro",
  description: "Objetos extraordinarios para viajeros, estudiosos y curiosos de lo imposible.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full">
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
