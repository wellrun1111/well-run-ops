type TestimonialProps = {
  quote: string;
  name: string;
  company: string;
  className?: string;
};

export default function Testimonial({
  quote,
  name,
  company,
  className,
}: TestimonialProps) {
  return (
    <div className={["mx-auto w-full max-w-6xl px-6 py-24 md:px-10", className ?? ""].join(" ")}>
      <div className="grid items-start gap-8 md:grid-cols-[30%_70%]">
        <div className="space-y-4">
          <div
            aria-hidden="true"
            className="font-serif text-[110px] leading-none text-[#D2A27E]/40"
          >
            “
          </div>
          <div className="space-y-1">
            <p className="text-[18px] font-semibold text-[#1f3741]">{name}</p>
            <p className="text-[16px] text-[#D2A27E]">{company}</p>
          </div>
        </div>

        <blockquote className="border-l-[3px] border-[#D2A27E] pl-6 text-[18px] font-normal leading-8 text-[#2e3b38] md:text-[20px] md:leading-9">
          {quote}
        </blockquote>
      </div>
    </div>
  );
}

