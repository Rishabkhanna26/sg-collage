import "@/styles.css";
import { Inter, Outfit } from "next/font/google";
import { Header } from "@/Header/Header";
import { Footer } from "@/Footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: {
    default: "SQ Group of Colleges — Excellence in Medical Education",
    template: "%s | SQ Group of Colleges",
  },
  description:
    "Leading medical institution offering MBBS, BDS, Pharm-D, DPT and Nursing programs with world-class faculty and facilities.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
