import { Link } from "react-router-dom";
import { Container, Section } from "../atoms/Container";
import { SectionHeading } from "../atoms/SectionHeading";
import { CarouselShell } from "./CarouselShell";
import { rooms, trendingThemes, pressLogos, testimonials } from "../../data/catalog";

export function ShopByRoom() {
  return (
    <Section>
      <Container>
        <SectionHeading title="Shop by Room" viewAllHref="/rooms" />
        <CarouselShell>
          {rooms.map((room) => (
            <Link
              key={room.id}
              to={`/rooms/${room.handle}`}
              className="group relative aspect-[3/4] w-[70%] shrink-0 snap-start overflow-hidden rounded-block sm:w-[45%] md:w-[32%] lg:w-[calc(20%-0.85rem)]"
            >
              <img
                src={room.image}
                alt={room.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <h3 className="absolute bottom-5 left-5 font-heading text-xl text-white md:text-2xl">
                {room.title}
              </h3>
            </Link>
          ))}
        </CarouselShell>
      </Container>
    </Section>
  );
}

export function TrendingThemes() {
  return (
    <Section className="bg-surface-soft">
      <Container>
        <SectionHeading title="What's Trending at One tooth World" align="center" />
        <CarouselShell>
          {trendingThemes.map((t) => (
            <Link
              key={t.id}
              to="/collections/trending"
              className="group w-[60%] shrink-0 snap-start text-center sm:w-[40%] md:w-[28%] lg:w-[calc(20%-0.85rem)]"
            >
              <div className="mb-4 aspect-[3/4] overflow-hidden rounded-block bg-surface">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-lg text-heading">{t.title}</h3>
              <p className="mt-1 text-xs text-subtext">{t.subtitle}</p>
            </Link>
          ))}
        </CarouselShell>
      </Container>
    </Section>
  );
}

export function BrandMarquee({ title, names }: { title: string; names: string[] }) {
  const doubled = [...names, ...names];
  return (
    <Section>
      <Container>
        <SectionHeading title={title} align="center" />
      </Container>
      <div className="overflow-hidden border-y border-line py-8">
        <div
          className="animate-marquee-left flex w-max items-center gap-14"
          style={{ ["--marquee-duration" as string]: "35s" }}
        >
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 font-heading text-xl text-subtext/70 transition-colors hover:text-foreground md:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function InstagramFeed() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Get a glimpse of how our products look in real spaces"
          subtitle="Loved by homeowners across India"
          align="center"
        />
        <CarouselShell>
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="w-[80%] shrink-0 snap-start overflow-hidden rounded-block border border-line bg-surface-soft sm:w-[55%] md:w-[38%] lg:w-[calc(25%-0.75rem)]"
            >
              <div className="aspect-[4/3]">
                <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="p-5">
                <p className="text-sm leading-relaxed text-foreground">“{t.quote}”</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-subtext">
                  — {t.name}
                </p>
              </figcaption>
            </figure>
          ))}
        </CarouselShell>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-line pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtext">Featured In</p>
          {pressLogos.map((p) => (
            <span key={p} className="font-heading text-lg text-subtext/60">
              {p}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ONABanner() {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-block bg-primary px-8 py-14 text-center text-white md:px-16 md:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            AI Shopping Companion
          </p>
          <h2 className="mx-auto max-w-2xl font-heading text-2xl leading-tight text-white md:text-4xl">
            Meet ONA — Your personal shopping AI companion
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
            She&apos;ll understand your space, suggest the perfect products and guide you through every
            corner of your home styling journey — instantly, with a human touch!
          </p>
          <Link
            to="/pages/ona"
            className="mt-8 inline-flex rounded-pill bg-white px-8 py-3.5 text-sm font-medium text-primary transition-transform hover:scale-105"
          >
            Talk to ONA →
          </Link>
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/5" />
        </div>
      </Container>
    </Section>
  );
}

export function AboutStrip() {
  return (
    <Section className="bg-secondary/50">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-block">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80&auto=format&fit=crop"
              alt="Curated living space"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About One tooth World
            </p>
            <h2 className="font-heading text-2xl leading-tight text-heading md:text-4xl">
              Crafted with Purpose, Curated with Care
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-subtext md:text-base">
              At One tooth World, we believe a beautiful home begins with intention. It&apos;s more than just
              aesthetics — it&apos;s about impact. We&apos;ve collaborated with 350+ Indian artisans and
              manufacturers to bring you pieces that last.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { title: "Quality", body: "Timeless craftsmanship designed to last for generations." },
                { title: "Aesthetics with Meaning", body: "Thoughtfully designed pieces that tell a story." },
                { title: "Sustainable Choices", body: "Curated with people and the planet in mind." },
              ].map((v) => (
                <div key={v.title}>
                  <h3 className="text-sm font-semibold text-heading">{v.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-subtext">{v.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex rounded-pill border border-foreground px-7 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-white"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-12 overflow-hidden border-y border-line/60 py-4">
        <div
          className="animate-marquee-left flex w-max gap-8"
          style={{ ["--marquee-duration" as string]: "25s" }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="font-heading text-3xl text-subtext/30 md:text-5xl">
              One tooth World —
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
