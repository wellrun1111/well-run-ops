import type { Metadata } from "next";
import { Lato, DM_Serif_Display } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Well-Run Ops",
  description: "Strategic Operations Studio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f0eb] text-[#2e3b38] font-sans font-normal text-[18px] leading-relaxed">
        <div className="w-full bg-[#1f3741]">
          <SiteHeader />
        </div>

        <main className="flex-1">{children}</main>

        <footer className="w-full bg-[#1f3741] text-[#f8f5ec]">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
            <div className="space-y-3">
              <div className="text-sm tracking-[0.28em] font-semibold">
                WELL-RUN OPS
              </div>
              <div className="text-sm text-[#f8f5ec]/85">
                Strategic Operations Studio
              </div>
              <div className="text-xs text-[#f8f5ec]/70">
                © 2026 Well-Run Retail, LLC
              </div>
            </div>

            <div className="space-y-3 md:justify-self-center">
              <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                Pages
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <a href="/about" className="hover:opacity-80">
                  About
                </a>
                <a href="/services" className="hover:opacity-80">
                  Services
                </a>
                <a href="/reset" className="hover:opacity-80">
                  The Reset
                </a>
                <a href="/contact" className="hover:opacity-80">
                  Contact
                </a>
              </div>
            </div>

            <div className="space-y-4 md:justify-self-end">
              <div className="flex items-center gap-4">
                <a
                  aria-label="LinkedIn"
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f8f5ec]/20 hover:border-[#f8f5ec]/35 hover:bg-white/10 transition"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#f8f5ec]"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2a4 4 0 0 1 2-3Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9H2v12h4V9Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  aria-label="Instagram"
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f8f5ec]/20 hover:border-[#f8f5ec]/35 hover:bg-white/10 transition"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#f8f5ec]"
                  >
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.5h.01"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>

              <form className="flex w-full max-w-sm items-center gap-2">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email for updates"
                  className="h-12 w-full rounded-full border border-[#f8f5ec]/20 bg-white/10 px-5 text-sm text-[#f8f5ec] placeholder:text-[#f8f5ec]/55 focus:outline-none focus:ring-2 focus:ring-[#D2A27E]/40"
                />
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-full bg-[#1f3741] px-6 text-sm font-semibold text-white transition will-change-transform hover:bg-[#2e4a52] hover:-translate-y-[2px] hover:shadow-[0_14px_30px_rgba(0,0,0,0.20)] focus:outline-none focus:ring-2 focus:ring-[#1f3741]/40"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
