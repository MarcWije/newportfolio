import type { Metadata } from "next";
import { jost } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shehan | Portfolio",
  description: "IT Intern & AI Researcher",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.className}`}>
      <body className="bg-[#030303] text-white selection:bg-cyber-cyan/30 antialiased overflow-x-hidden min-h-screen">
        {/* Background Video Layer */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover pointer-events-none opacity-25 z-[-1]"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Overlay Effects */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.08]"
             style={{ backgroundImage: 'linear-gradient(#00F2FF 1px, transparent 1px), linear-gradient(90deg, #00F2FF 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="fixed inset-0 pointer-events-none z-0 opacity-10"
             style={{ background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 1px, rgba(0,242,255,0.02) 1px, rgba(0,242,255,0.02) 2px)', backgroundSize: '100% 2px' }} />
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]" />

        {/* Main Content Wrapper */}
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}