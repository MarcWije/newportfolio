import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Shehan | Portfolio",
  description: "IT Intern & AI Researcher",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#030303] text-white selection:bg-cyber-cyan/30 overflow-x-hidden font-sans antialiased">
        {/* Background Video Layer */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover pointer-events-none opacity-[0.4] z-[-1]"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Grid Overlay - More prominent for a hacker theme */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.08]"
             style={{ backgroundImage: 'linear-gradient(#00F2FF 1px, transparent 1px), linear-gradient(90deg, #00F2FF 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        {/* Scanline Effect - Subtle horizontal lines for a CRT feel */}
        <div className="fixed inset-0 pointer-events-none z-0"
             style={{ background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 1px, rgba(0,242,255,0.02) 1px, rgba(0,242,255,0.02) 2px)', backgroundSize: '100% 2px' }} />
        {/* Radial Glow - Keeps the subtle light source */}
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]" />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}