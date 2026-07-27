import Link from "next/link";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type VideoTestimonial = {
  name: string;
  quote: string;
  src: string;
};

type WrittenTestimonial = {
  name: string;
  fragment: string;
  context?: string;
};

// ─── DATA — voeg hier nieuwe testimonials toe ─────────────────────────────────
// Videobestanden plaatsen in /public/videos/ en het pad invullen bij src.

const videoTestimonials: VideoTestimonial[] = [
  {
    name: "Deelnemer 1",
    src: "/videos/testimonial-1.mp4",
    quote: "Hier komt de quote.",
  },
  {
    name: "Deelnemer 2",
    src: "/videos/testimonial-2.mp4",
    quote: "Hier komt de quote.",
  },
];

const writtenTestimonials: WrittenTestimonial[] = [
  // Voorbeeld (verwijder of vervang):
  // {
  //   name: "Miriam, 47",
  //   fragment: "Ik had nooit gedacht dat ik zo snel zou merken dat mijn energie terugkwam.",
  //   context: "Uit de coach call van week 4",
  // },
];

// ─────────────────────────────────────────────────────────────────────────────

export function ErvaringenPagina() {
  return (
    <main
      className="min-h-screen px-4 pb-24 pt-12 sm:px-6 sm:pt-16"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      <div className="mx-auto w-full max-w-4xl space-y-20">

        {/* ── Hero ── */}
        <header className="space-y-3 text-center">
          <h1
            style={{
              fontFamily: "var(--font-cormorant), 'Playfair Display', serif",
              fontSize: "clamp(40px, 5vw, 52px)",
              fontStyle: "italic",
              lineHeight: 1.15,
              color: "#2A2520",
            }}
          >
            Wat deelnemers zeggen
          </h1>
          <p
            style={{
              fontFamily: "var(--font-work-sans), sans-serif",
              fontSize: "clamp(16px, 2vw, 18px)",
              color: "#78716c",
            }}
          >
            Echte vrouwen. Echte verandering.
          </p>
        </header>

        {/* ── Videotestimonials ── */}
        {videoTestimonials.length > 0 && (
          <section className="space-y-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {videoTestimonials.map((v) => (
                <div key={v.src} className="space-y-3">
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <video
                    src={v.src}
                    controls
                    preload="metadata"
                    className="w-full"
                    style={{
                      borderRadius: "8px",
                      boxShadow: "0 2px 12px rgba(42,37,32,0.10)",
                      display: "block",
                    }}
                  />
                  <p
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-work-sans), sans-serif",
                      fontSize: "15px",
                      color: "#2A2520",
                    }}
                  >
                    {v.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), 'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "20px",
                      color: "#57534e",
                      lineHeight: 1.4,
                    }}
                  >
                    {v.quote}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Geschreven testimonials ── */}
        {writtenTestimonials.length > 0 && (
          <section className="space-y-6">
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "36px",
                color: "#2A2520",
              }}
            >
              In hun eigen woorden
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {writtenTestimonials.map((w, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <span
                    aria-hidden
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "56px",
                      lineHeight: "1",
                      color: "#D4AF37",
                      display: "block",
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), 'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "22px",
                      lineHeight: 1.55,
                      color: "#2A2520",
                      marginTop: "8px",
                    }}
                  >
                    {w.fragment}
                  </p>
                  <div className="mt-4 space-y-0.5">
                    <p
                      className="font-semibold"
                      style={{
                        fontFamily: "var(--font-work-sans), sans-serif",
                        fontSize: "15px",
                        color: "#2A2520",
                      }}
                    >
                      {w.name}
                    </p>
                    {w.context && (
                      <p
                        style={{
                          fontFamily: "var(--font-work-sans), sans-serif",
                          fontSize: "13px",
                          color: "#a8a29e",
                        }}
                      >
                        {w.context}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="rounded-xl border border-stone-200 bg-white px-8 py-10 text-center shadow-sm">
          <p
            style={{
              fontFamily: "var(--font-work-sans), sans-serif",
              fontSize: "clamp(16px, 2vw, 18px)",
              color: "#2A2520",
              marginBottom: "24px",
            }}
          >
            Wil je weten of dit programma bij je past?
          </p>
          <Link
            href="/scan"
            className="inline-block rounded-lg px-8 py-3 font-semibold transition-colors bg-[#2A2520] text-[#FAF7F2] hover:bg-[#D4AF37] hover:text-[#2A2520]"
            style={{ fontFamily: "var(--font-work-sans), sans-serif", fontSize: "16px" }}
          >
            Doe de Longevity Scan
          </Link>
        </section>

      </div>
    </main>
  );
}
