import Link from "next/link";
import {
  CheckCircle2,
  Crosshair,
  Handshake,
  MapPin,
  Sun,
} from "lucide-react";
import Reveal from "../components/Reveal";


export default function AboutPage() {
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
                  THE STUDIO
                </div>
              </div>
              <h1 className="font-serif font-bold text-[#1f3741] leading-[1.02] tracking-tight text-[40px] md:text-[64px]">
                We build the infrastructure that lets good businesses grow.
              </h1>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STUDIO STORY */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
            <div className="max-w-3xl space-y-6 text-[18px] leading-8 text-[#2e3b38]">
              <p>The revenue is there. The clients keep coming. But behind the scenes, everything runs through you.</p>
              <p>We built this studio to fix that. To give growing businesses the operational backbone they need so the owner can finally step back.</p>
              <p className="font-semibold">Strategy. Systems. Clarity. That&apos;s the work.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* KALISH */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                  OPERATIONS STRATEGY LEAD
                </div>
                <h2 className="mt-5 font-serif text-[36px] font-bold text-[#1f3741] md:text-[48px]">
                  Kalish Nesbitt
                </h2>
              </div>
              <div className="md:col-span-7 space-y-6">
                <div
                  className="h-[360px] w-full rounded-[24px] border-2 border-dashed border-[#2e3b38]/30 bg-[#c6c8c1] flex items-center justify-center text-[#2e3b38] font-semibold text-[15px]"
                >
                  Headshot: Kalish Nesbitt
                </div>
                <p className="text-[18px] leading-8 text-[#2e3b38]">
                  Systems architecture. Workflow design. Strategic mapping. The operational clarity that lets a business scale without burning out its owner.
                </p>
                <p className="text-[18px] leading-8 text-[#2e3b38]">
                  She also leads Calm and Co. and serves in a leadership role at ImpactTulsa.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CLARA */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                  BRAND AND STRATEGIC ALIGNMENT LEAD
                </div>
                <h2 className="mt-5 font-serif text-[36px] font-bold text-[#1f3741] md:text-[48px]">
                  Clara Williams
                </h2>
              </div>
              <div className="md:col-span-7 space-y-6">
                <div
                  className="h-[360px] w-full rounded-[24px] border-2 border-dashed border-[#2e3b38]/30 bg-[#c6c8c1] flex items-center justify-center text-[#2e3b38] font-semibold text-[15px]"
                >
                  Headshot: Clara Williams
                </div>
                <p className="text-[18px] leading-8 text-[#2e3b38]">
                  Brand positioning, business model alignment, and strategic storytelling. Clara partners with Well-Run Ops on The Well-Run Reset.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
              OUR PRINCIPLES
            </div>

            <div className="mt-10 grid gap-6">
              {[
                {
                  title: "Depth over volume.",
                  icon: Crosshair,
                  body: "Small roster. Full attention.",
                },
                {
                  title: "Clarity before scale.",
                  icon: Sun,
                  body: "We don&apos;t recommend growth until the foundation supports it.",
                },
                {
                  title: "Relationship first.",
                  icon: Handshake,
                  body: "Every engagement starts with listening.",
                },
                {
                  title: "We practice what we build.",
                  icon: CheckCircle2,
                  body: "Our own systems meet the same standard we set for clients.",
                },
                {
                  title: "We meet you where you are.",
                  icon: MapPin,
                  body: "Start where it makes sense. Go deeper when you&apos;re ready.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-[#c6c8c1] bg-white/55 p-7"
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 text-[#D2A27E]"
                      strokeWidth={1.9}
                    />
                    <h3 className="font-serif text-[28px] font-bold text-[#1f3741]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[18px] leading-8 text-[#2e3b38]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="max-w-4xl rounded-[26px] border border-[#c6c8c1] bg-white/50 p-10 md:p-12">
              <h2 className="font-serif text-[34px] font-bold text-[#1f3741] leading-[1.10] md:text-[52px]">
                Curious about working together?
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
