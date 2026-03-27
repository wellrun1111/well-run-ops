import Link from "next/link";
import { MessageCircle, RefreshCcw, Wrench, Zap } from "lucide-react";
import Reveal from "../components/Reveal";
import Testimonial from "../components/Testimonial";


export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f5f0eb]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-24 left-0 right-0 h-[320px] bg-gradient-to-t from-[#f5f0eb] via-[#f5f0eb]/70 to-transparent" />
          <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#e8e3de]/35 blur-3xl" />
          <div className="absolute -bottom-44 left-[-10%] h-[560px] w-[560px] rounded-full bg-[#e8e3de]/55 blur-3xl" />
        </div>

        <div className="mx-auto flex min-h-[85vh] w-full max-w-6xl items-center px-6 py-24 md:px-10 md:py-28">
          <Reveal className="w-full">
            <div className="max-w-4xl space-y-9">
              <div className="inline-flex items-center gap-3">
                <div className="h-[1px] w-10 bg-[#D2A27E]/70" />
                <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                  SERVICES
                </div>
              </div>
              <h1 className="font-serif font-bold text-[#1f3741] leading-[1.02] tracking-tight text-[40px] md:text-[64px]">
                Real support. Right-sized for right now.
              </h1>
              <p className="max-w-3xl text-[18px] leading-8 text-[#2e3b38] md:text-[20px]">
                Start with what you need. Go deeper when you&apos;re ready.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="cta-pill"
                >
                  Start the Conversation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ADVISORY SESSIONS */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="rounded-[26px] border border-[#c6c8c1] bg-white/55 p-10 md:p-12">
              <div className="flex items-center gap-2 text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                <MessageCircle className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                ADVISORY SESSIONS
              </div>
              <h2 className="mt-5 font-serif text-[34px] font-bold text-[#1f3741] leading-[1.10] md:text-[48px]">
                A thinking partner when you need one.
              </h2>
              <div className="mt-6 text-[18px] leading-8 text-[#2e3b38]">
                <p>
                  Sixty or ninety minutes with an operations strategist. You bring the question, you leave with a clear next step.
                </p>
              </div>
              <div className="mt-8 text-[13px] tracking-[0.16em] uppercase font-semibold text-[#D2A27E]">
                Starting at $500
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="cta-pill"
                >
                  Start the Conversation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <Testimonial
              className="mt-12 px-0 py-0"
              quote="Before working with Well-Run Ops, most of my business plan was in my head. I had direction but no strategic roadmap. Kalish helped me create a plan that mapped my goals clearly, set up systems to build trust with my audience, and define my company's mission and values. The work even supported my accelerator applications because I finally had the structure to communicate my vision."
              name="Melanie Evans"
              company="The Abundance CEO"
            />
          </div>
        </Reveal>
      </section>

      {/* WORKSHOPS */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="rounded-[26px] border border-[#c6c8c1] bg-white/70 p-10 md:p-12">
              <div className="flex items-center gap-2 text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                <Zap className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                WORKSHOPS AND INTENSIVES
              </div>
              <h2 className="mt-5 font-serif text-[34px] font-bold text-[#1f3741] leading-[1.10] md:text-[48px]">
                Progress you can feel in a single session.
              </h2>
              <div className="mt-6 text-[18px] leading-8 text-[#2e3b38]">
                <p>
                  A half-day or full-day working session. We tackle one operational area and you walk out with tangible progress.
                </p>
              </div>
              <div className="mt-8 text-[13px] tracking-[0.16em] uppercase font-semibold text-[#D2A27E]">
                Starting at $1,500 (half-day) / $2,500 (full-day)
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="cta-pill"
                >
                  Start the Conversation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* OPERATIONS PROJECTS */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="rounded-[26px] border border-[#c6c8c1] bg-white/55 p-10 md:p-12">
              <div className="flex items-center gap-2 text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                <Wrench className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                OPERATIONS PROJECTS
              </div>
              <h2 className="mt-5 font-serif text-[34px] font-bold text-[#1f3741] leading-[1.10] md:text-[48px]">
                Fix the one thing that&apos;s costing you the most.
              </h2>
              <div className="mt-6 text-[18px] leading-8 text-[#2e3b38]">
                <p>
                  Clear scope. Defined timeline. Finished deliverable. We fix the system that&apos;s costing you the most.
                </p>
              </div>
              <div className="mt-8 text-[13px] tracking-[0.16em] uppercase font-semibold text-[#D2A27E]">
                Starting at $3,000
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="cta-pill"
                >
                  Start the Conversation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <Testimonial
              className="mt-12 px-0 py-0"
              quote="Kalish was easy to work with and asked the right questions to understand the operational needs of the business so our team could execute. The SOP workshop and buildout has been incredibly helpful for our team to revisit and ensure they are doing their job effectively. This type of work is a great return on investment over time."
              name="Kim Roxie"
              company="LAMIK Beauty"
            />
          </div>
        </Reveal>
      </section>

      {/* WELL-RUN RESET */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="rounded-[28px] border border-[#c6c8c1] bg-white/70 p-10 md:p-14">
              <div className="flex items-center gap-2 text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                <RefreshCcw className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                FLAGSHIP PROGRAM
              </div>
              <h2 className="mt-5 font-serif text-[36px] font-bold text-[#1f3741] leading-[1.08] md:text-[56px]">
                The Well-Run Reset
              </h2>
              <p className="mt-4 font-serif text-[24px] font-bold text-[#1f3741] leading-tight">
                90 days. A complete operational reset.
              </p>
              <p className="mt-6 max-w-4xl text-[18px] leading-8 text-[#2e3b38]">
                The full engagement. Strategic audit, brand alignment,
                operational redesign, documented handover. For business owners
                who are done patching and ready to rebuild.
              </p>
              <div className="mt-8 text-[13px] tracking-[0.12em] uppercase font-semibold text-[#D2A27E]">
                Examine: Starting at $8,000 | Signature: Starting at $25,000 |
                Executive: Starting at $50,000
              </div>
              <div className="mt-9">
                <Link
                  href="/contact"
                  className="cta-pill"
                >
                  See If We&apos;re a Fit <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TRANSITION CALLOUT */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="max-w-4xl rounded-[26px] border border-[#c6c8c1] bg-white/55 p-10 md:p-12">
              <h2 className="font-serif text-[34px] font-bold text-[#1f3741] leading-[1.10] md:text-[48px]">
                Preparing for a sale, merger, or partnership?
              </h2>
              <p className="mt-6 text-[18px] leading-8 text-[#2e3b38]">
                Clean systems and documented workflows are what determine your valuation. Every service we offer builds toward that readiness.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="cta-pill"
                >
                  Start the Conversation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* NOT SURE */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="max-w-4xl rounded-[26px] border border-[#c6c8c1] bg-white/50 p-10 md:p-12">
              <h2 className="font-serif text-[34px] font-bold text-[#1f3741] leading-[1.10] md:text-[52px]">
                Not sure where to start?
              </h2>
              <p className="mt-6 text-[18px] leading-8 text-[#2e3b38]">
                Tell us where you are. We&apos;ll point you in the right direction.
              </p>
              <div className="mt-9">
                <Link
                  href="/contact"
                  className="cta-pill"
                >
                  Start the Conversation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
