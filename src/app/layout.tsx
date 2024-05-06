import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";
import { RestaurantProvider } from "../context/RestaurantsContext";
import { EditComment } from "../components/EditComent";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "TailorHub",
  description: "Prueba tecnica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <AuthProvider>
          <RestaurantProvider>
            {children}
            <Footer />
          </RestaurantProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
