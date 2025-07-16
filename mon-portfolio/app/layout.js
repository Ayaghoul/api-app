import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Mon site avec Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
