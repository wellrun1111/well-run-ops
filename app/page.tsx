import Link from "next/link";
import { Eye, Layers, Search } from "lucide-react";
import Reveal from "./components/Reveal";
import Testimonial from "./components/Testimonial";


export default function Home() {
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
            <div className="grid gap-14 md:grid-cols-2 md:items-center">
              <div className="space-y-9">
                <div className="inline-flex items-center gap-3">
                  <div className="h-[1px] w-10 bg-[#D2A27E]/70" />
                  <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                    Strategic Operations Studio
                  </div>
                </div>
                <h1 className="font-serif font-bold text-[#1f3741] leading-[1.02] tracking-tight text-[40px] md:text-[64px]">
                  Your business is ready to run well.
                </h1>
                <p className="text-[18px] leading-8 text-[#2e3b38] md:text-[20px]">
                  Operational strategy and systems for business owners who are ready to grow with clarity.
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
              <div className="flex justify-center md:justify-end">
                <div
                  className="w-full max-w-[500px] rounded-[24px] border-2 border-dashed border-[#2e3b38]/30 bg-[#c6c8c1] flex items-center justify-center text-[#2e3b38] font-semibold text-[15px]"
                  style={{ height: "400px" }}
                >
                  Photo: Kalish in action
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
            <div className="mb-6 text-center text-[11px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
              Trusted Clients
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["Conscious Hustler", "IFW", "LAMIK Beauty", "BLK + GRN", "Clean Home Design"].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center rounded-[10px] bg-white/60"
                  style={{ width: "130px", height: "50px" }}
                >
                  <span className="text-center leading-tight" style={{ fontSize: "11px", color: "#2e3b38" }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="relative mx-auto w-full max-w-6xl px-6 py-28 md:px-10">
            <div className="grid gap-14 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                  The problem
                </div>
                <h2 className="mt-5 font-serif text-[32px] font-bold text-[#1f3741] leading-[1.12] md:text-[44px]">
                  Your business has grown. Your operations haven&apos;t.
                </h2>
              </div>
              <div className="space-y-6 text-[18px] leading-8 text-[#2e3b38] md:col-span-7">
                <p>Your tools don&apos;t connect. Your team runs everything through you. Your backend is held together by effort, not design.</p>
                <p className="font-semibold text-[#2e3b38]">We close the gaps.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto w-full max-w-6xl px-6 py-28 md:px-10">
            <div className="mb-12 max-w-2xl">
              <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                What we do
              </div>
              <h2 className="mt-5 font-serif text-[32px] font-bold text-[#1f3741] leading-[1.12] md:text-[44px]">
                Examine. Envision. Enhance.
              </h2>
              <div className="mt-5 h-px w-48 border-t border-dashed border-[#D2A27E]/50" />
            </div>

            <div className="grid gap-7 md:grid-cols-3">
              {[
                {
                  title: "Examine",
                  icon: Search,
                  body: "A full audit of your operations, tools, team, and customer experience.",
                },
                {
                  title: "Envision",
                  icon: Eye,
                  body: "Aligning how your business runs with how it shows up.",
                },
                {
                  title: "Enhance",
                  icon: Layers,
                  body: "Rebuilding your workflows, SOPs, and systems for real growth.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group rounded-[22px] border border-[#c6c8c1] bg-white/55 p-9 backdrop-blur-sm transition will-change-transform hover:-translate-y-[3px] hover:shadow-[0_18px_45px_rgba(46,59,56,0.12)] hover:scale-[1.02]"
                >
                  <card.icon
                    aria-hidden="true"
                    className="mb-4 h-9 w-9 text-[#D2A27E]"
                    strokeWidth={1.9}
                  />
                  <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                    {card.title}
                  </div>
                  <p className="mt-5 text-[18px] font-medium leading-8 text-[#2e3b38]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2e3b38] underline decoration-[#D2A27E]/70 underline-offset-4 hover:decoration-[#D2A27E]"
              >
                See All Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto w-full max-w-6xl px-6 py-28 md:px-10">
            <div className="grid gap-14 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                  Services
                </div>
                <h2 className="mt-5 font-serif text-[32px] font-bold text-[#1f3741] leading-[1.12] md:text-[44px]">
                  Wherever you are right now, there&apos;s a way in.
                </h2>
              <div className="mt-5 h-px w-48 border-t border-dashed border-[#D2A27E]/50" />
              </div>
              <div className="md:col-span-7">
                <div className="grid gap-6">
                  {[
                    {
                      name: "Advisory Sessions",
                      price: "Starting at $500",
                      desc: "Clarity on one challenge. One conversation.",
                    },
                    {
                      name: "Workshops and Intensives",
                      price: "Starting at $1,500",
                      desc: "A working session that moves real work forward.",
                    },
                    {
                      name: "Operations Projects",
                      price: "Starting at $3,000",
                      desc: "One system. One bottleneck. Scoped and delivered.",
                    },
                    {
                      name: "The Well-Run Reset",
                      price: "Starting at $8,000",
                      desc: "90 days of strategic and operational transformation.",
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="group rounded-[20px] border border-[#c6c8c1] bg-white/70 p-7 transition will-change-transform hover:-translate-y-[2px] hover:shadow-[0_18px_45px_rgba(46,59,56,0.10)] hover:scale-[1.02]"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-4">
                        <div className="font-serif text-[22px] font-bold text-[#1f3741]">
                          {item.name}
                        </div>
                        <div className="text-[13px] tracking-[0.14em] uppercase font-semibold text-[#D2A27E]">
                          {item.price}
                        </div>
                      </div>
                      <div className="mt-3 text-[18px] leading-8 text-[#2e3b38]">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2e3b38] underline decoration-[#D2A27E]/70 underline-offset-4 hover:decoration-[#D2A27E]"
                  >
                    Explore Our Services <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <Testimonial
            quote="If you are considering support to scale your business, Well-Run Ops is worth the investment. We gained the tools, support, and strategic guidance we needed, including a custom build in Monday.com that alone was worth the cost. Prepare to be impressed by the depth of support and clarity you walk away with."
            name="Wendy Voutrobek"
            company="Client"
          />
        </Reveal>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto w-full max-w-6xl px-6 py-28 md:px-10">
            <div className="max-w-4xl rounded-[26px] border border-[#c6c8c1] bg-white/50 p-10 md:p-12">
              <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                Next step
              </div>
              <h2 className="mt-5 font-serif text-[34px] font-bold text-[#1f3741] leading-[1.10] md:text-[52px]">
                Your business deserves to breathe. Let&apos;s start there.
              </h2>
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
