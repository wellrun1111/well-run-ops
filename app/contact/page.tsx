import Link from "next/link";
import Script from "next/script";
import Reveal from "../components/Reveal";


export default function ContactPage() {
  return (
    <div className="w-full">
      <Script
        src="//cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"
        strategy="afterInteractive"
      />
      <Script id="dubsado-iframe-resize" strategy="afterInteractive">
        {`
          (function () {
            function initResize() {
              if (window.iFrameResize) {
                window.iFrameResize({ checkOrigin: false }, "#dubsado-intake-form");
              }
            }
            if (document.readyState === "complete") {
              initResize();
            } else {
              window.addEventListener("load", initResize);
            }
          })();
        `}
      </Script>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f5f0eb]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-24 left-0 right-0 h-[320px] bg-gradient-to-t from-[#f5f0eb] via-[#f5f0eb]/70 to-transparent" />
          <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#e8e3de]/35 blur-3xl" />
        </div>

        <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center px-6 py-24 md:px-10 md:py-28">
          <Reveal className="w-full">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center gap-3">
                <div className="h-[1px] w-10 bg-[#D2A27E]/70" />
                <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                  CONTACT
                </div>
              </div>
              <h1 className="font-serif text-[42px] font-bold leading-[1.02] tracking-tight text-[#1f3741] md:text-[64px]">
                Tell us where you are. We&apos;ll take it from there.
              </h1>
              <p className="max-w-4xl text-[18px] leading-8 text-[#2e3b38] md:text-[20px]">
                Fill out the form below and tell us a little about your business.
                If it&apos;s a good fit, we&apos;ll send you a link to schedule a
                call. Simple as that.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
            <div className="overflow-hidden rounded-[20px] border border-[#c6c8c1] bg-white p-2 md:p-4">
              <iframe
                id="dubsado-intake-form"
                title="Well-Run Ops Intake Form"
                src="https://portal.wellrunretail.com/public/form/view/5fdb9677aa74f200efaaa05b?iframe=true"
                width="100%"
                height="750"
                frameBorder="0"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* DIRECT CONTACT */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
            <div className="max-w-3xl space-y-7">
              <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                OTHER WAYS TO REACH US
              </div>
              <Link
                href="mailto:hello@wellrunops.com"
                className="inline-block text-[22px] font-semibold text-[#2e3b38] underline decoration-[#D2A27E]/70 underline-offset-4"
              >
                hello@wellrunops.com
              </Link>
              <div className="flex items-center gap-4">
                <a
                  aria-label="LinkedIn"
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#c6c8c1] bg-white/55 text-[#D2A27E] transition hover:bg-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#c6c8c1] bg-white/55 text-[#D2A27E] transition hover:bg-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

