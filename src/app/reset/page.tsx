import Link from "next/link";
import {
  CalendarClock,
  ClipboardList,
  Compass,
  Route,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Reveal from "../components/Reveal";
import Testimonial from "../components/Testimonial";


export default function ResetPage() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f5f0eb]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-24 left-0 right-0 h-[320px] bg-gradient-to-t from-[#f5f0eb] via-[#f5f0eb]/70 to-transparent" />
          <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-white/60 blur-3xl" />
          <div className="absolute -bottom-44 left-[-10%] h-[560px] w-[560px] rounded-full bg-[#e8e3de]/55 blur-3xl" />
        </div>

        <div className="mx-auto flex min-h-[85vh] w-full max-w-6xl items-center px-6 py-24 md:px-10 md:py-28">
          <Reveal className="w-full">
            <div className="grid gap-14 md:grid-cols-2 md:items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3">
                  <div className="h-[1px] w-10 bg-[#D2A27E]/70" />
                  <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
                    FLAGSHIP PROGRAM
                  </div>
                </div>
                <h1 className="font-serif text-[42px] font-bold leading-[1.02] tracking-tight text-[#1f3741] md:text-[64px]">
                  The Well-Run Reset
                </h1>
                <p className="text-[18px] leading-8 text-[#2e3b38] md:text-[20px]">
                  We rebuild the infrastructure underneath your business so growth finally feels sustainable.
                </p>
                <div className="pt-2">
                  <Link href="/contact" className="cta-pill">
                    See If We&apos;re a Fit <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div
                  className="w-full max-w-[500px] rounded-[24px] border-2 border-dashed border-[#2e3b38]/30 bg-[#c6c8c1] flex items-center justify-center text-[#2e3b38] font-semibold text-[15px]"
                  style={{ height: "400px" }}
                >
                  Photo placeholder
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
              IS THIS FOR YOU?
            </div>
            <h2 className="mt-5 font-serif text-[34px] font-bold leading-[1.1] text-[#1f3741] md:text-[48px]">
              This might be for you if...
            </h2>
            <ul className="mt-10 space-y-5">
              {[
                "You have consistent revenue and an established client base.",
                "You can't do everything yourself anymore, but your operations haven't caught up.",
                "Your tools are duct-taped together. Your team comes to you for everything because nothing is documented.",
                "You've been meaning to fix the backend for months.",
                "You're preparing for acquisition, partnership, or a transition and need your operations clean and scalable.",
                "You want a partner who sees the full picture.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-[18px] leading-8 text-[#2e3b38]">
                  <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#D2A27E]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* FRAMEWORK */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
              THE FRAMEWORK
            </div>
            <h2 className="mt-5 font-serif text-[34px] font-bold leading-[1.1] text-[#1f3741] md:text-[48px]">
              Examine. Envision. Enhance. Ease.
            </h2>

            <div className="mt-12 grid gap-7 md:grid-cols-2">
              {[
                {
                  phase: "EXAMINE",
                  title: "Operations Assessment Playbook",
                  lead: "Led by Kalish",
                  body: "We map everything. Nothing gets redesigned until we see the full picture.",
                },
                {
                  phase: "ENVISION",
                  title: "Brand and Business Alignment",
                  lead: "Led by Clara",
                  body: "We clarify where you're going and align operations with what your customers see.",
                },
                {
                  phase: "ENHANCE",
                  title: "Operational Ecosystem Redesign",
                  lead: "Joint",
                  body: "Customer journey, SOPs, workflows, automation. This is where your business starts running differently.",
                },
                {
                  phase: "EASE",
                  title: "Handover and Forward Plan",
                  lead: "Joint",
                  body: "Your blueprint, team training, recorded walkthroughs, and a 90-day roadmap. You step back knowing the systems hold.",
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  className="group rounded-[22px] border border-[#c6c8c1] bg-white/70 p-8 transition hover:-translate-y-[2px] hover:shadow-[0_18px_45px_rgba(46,59,56,0.10)] hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D2A27E]" />
                    <div className="text-[13px] tracking-[0.2em] uppercase font-semibold text-[#D2A27E]">
                      {item.phase}
                    </div>
                  </div>
                  <h3 className="mt-5 font-serif text-[28px] font-bold leading-tight text-[#1f3741]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[16px] font-semibold text-[#D2A27E]">{item.lead}</p>
                  <p className="mt-5 text-[18px] leading-8 text-[#2e3b38]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* AFTER 90 DAYS */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
              WHAT YOU WALK AWAY WITH
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: Compass,
                  text: "A complete operational map of your business.",
                },
                {
                  icon: Target,
                  text: "Brand positioning that matches how you actually operate.",
                },
                {
                  icon: Route,
                  text: "A redesigned customer journey.",
                },
                {
                  icon: ClipboardList,
                  text: "Documented workflows and SOPs.",
                },
                {
                  icon: Users,
                  text: "Clear team roles and delegation.",
                },
                {
                  icon: TrendingUp,
                  text: "A business ready for growth, partnership, acquisition, or whatever's next.",
                },
                {
                  icon: CalendarClock,
                  text: "A 90-day plan so you don't lose momentum.",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-4 rounded-[14px] border border-[#c6c8c1] bg-white/60 p-5"
                >
                  <item.icon
                    aria-hidden="true"
                    className="mt-1 h-6 w-6 shrink-0 text-[#D2A27E]"
                    strokeWidth={1.9}
                  />
                  <p className="text-[18px] leading-8 text-[#2e3b38]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* INVESTMENT */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
              INVESTMENT
            </div>
            <h2 className="mt-5 font-serif text-[34px] font-bold leading-[1.1] text-[#1f3741] md:text-[48px]">
              Three ways in.
            </h2>

            <div className="mt-12 grid gap-7 md:grid-cols-3">
              <div className="rounded-[22px] border border-[#c6c8c1] bg-white/60 p-8">
                <div className="text-[13px] tracking-[0.2em] uppercase font-semibold text-[#D2A27E]">
                  EXAMINE
                </div>
                <h3 className="mt-4 font-serif text-[28px] font-bold text-[#1f3741]">
                  Operations Assessment Playbook
                </h3>
                <p className="mt-5 text-[18px] leading-8 text-[#2e3b38]">
                  Phases 1 and 2. The full audit and brand alignment as a
                  roadmap. Implementation is yours, or bring us back when
                  you&apos;re ready.
                </p>
                <p className="mt-6 text-[13px] tracking-[0.16em] uppercase font-semibold text-[#D2A27E]">
                  Starting at $8,000
                </p>
                <div className="mt-8">
                  <Link href="/contact" className="cta-pill">
                    See If We&apos;re a Fit <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border-2 border-[#D2A27E]/60 bg-[#f5f0eb] p-9 shadow-[0_20px_40px_rgba(46,59,56,0.10)] md:scale-[1.02]">
                <div className="text-[13px] tracking-[0.2em] uppercase font-semibold text-[#D2A27E]">
                  SIGNATURE RESET
                </div>
                <h3 className="mt-4 font-serif text-[30px] font-bold text-[#1f3741]">
                  Full Transformation
                </h3>
                <p className="mt-5 text-[18px] leading-8 text-[#2e3b38]">
                  All four phases: Examine, Envision, Enhance, Ease. Strategy,
                  alignment, redesign, implementation. One arc. This is what
                  most clients choose.
                </p>
                <p className="mt-6 text-[13px] tracking-[0.16em] uppercase font-semibold text-[#D2A27E]">
                  Starting at $25,000
                </p>
                <div className="mt-8">
                  <Link href="/contact" className="cta-pill">
                    See If We&apos;re a Fit <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="rounded-[22px] border border-[#c6c8c1] bg-white/60 p-8">
                <div className="text-[13px] tracking-[0.2em] uppercase font-semibold text-[#D2A27E]">
                  EXECUTIVE RESET
                </div>
                <h3 className="mt-4 font-serif text-[28px] font-bold text-[#1f3741]">
                  Premium Depth
                </h3>
                <p className="mt-5 text-[18px] leading-8 text-[#2e3b38]">
                  Everything in the Signature plus deeper advisory and expanded
                  implementation. For businesses with larger teams or more
                  complexity.
                </p>
                <p className="mt-6 text-[13px] tracking-[0.16em] uppercase font-semibold text-[#D2A27E]">
                  Starting at $50,000
                </p>
                <div className="mt-8">
                  <Link href="/contact" className="cta-pill">
                    See If We&apos;re a Fit <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CAPACITY */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
            <p className="max-w-5xl text-[18px] leading-8 text-[#2e3b38]">
              Small number of clients per cycle. Intentionally. So every
              engagement gets our full attention. If the timing isn&apos;t right,
              we&apos;ll keep you on our radar for the next one.
            </p>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <Testimonial
            quote="If you are considering support to scale your business, Well-Run Ops is worth the investment. We gained the tools, support, and strategic guidance we needed, including a custom build in Monday.com that alone was worth the cost. Prepare to be impressed by the depth of support and clarity you walk away with."
            name="Wendy Voutrobek"
            company="Client"
          />
        </Reveal>
        <Reveal>
          <Testimonial
            className="pt-0"
            quote="I came in with vision but needed help turning it into an organized plan that matched the scale of what I am building. I gained a framework I can reuse, which has made decision-making and execution so much easier. The biggest win is that I am not just dreaming, I am building."
            name="Amnoni Myers"
            company="You Are the Prize"
          />
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-[#e8e3de]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="text-[13px] tracking-[0.22em] uppercase font-semibold text-[#D2A27E]">
              COMMON QUESTIONS
            </div>
            <div className="mt-10 space-y-4">
              {[
                {
                  q: "How long does it take?",
                  a: "90 days, kickoff to handover.",
                },
                {
                  q: "Can I start with just the Examine tier?",
                  a: "Yes. Many clients start with the Operations Assessment Playbook and come back for the full Reset later.",
                },
                {
                  q: "Product-based or service-based?",
                  a: "Both. The framework fits any business with operational complexity.",
                },
                {
                  q: "Not sure which tier?",
                  a: "Fill out the intake form. We'll figure it out together.",
                },
                {
                  q: "Not ready for the Reset?",
                  a: "Advisory sessions, workshops, and projects are all available. There's always a way in.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-[16px] border border-[#c6c8c1] bg-white/45 px-6 py-4"
                >
                  <summary className="cursor-pointer list-none text-[20px] font-serif font-bold text-[#1f3741]">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-[18px] leading-8 text-[#2e3b38]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#f5f0eb]">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
            <h2 className="max-w-4xl font-serif text-[36px] font-bold leading-[1.08] text-[#1f3741] md:text-[56px]">
              You&apos;ve built something worth running well.
            </h2>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/contact" className="cta-pill">
                See If We&apos;re a Fit <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="text-[16px] font-semibold text-[#2e3b38] underline decoration-[#D2A27E]/70 underline-offset-4"
              >
                Start the Conversation
              </Link>
              <Link
                href="/services"
                className="text-[16px] font-semibold text-[#2e3b38] underline decoration-[#D2A27E]/70 underline-offset-4"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
