import { Container } from "../components/atoms/Container";
import { Button } from "../components/atoms/Button";

export function AboutPage() {
  return (
    <>
      <section className="bg-secondary/40 py-16 md:py-24">
        <Container size="narrow" className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            About One tooth World
          </p>
          <h1 className="font-heading text-3xl leading-tight text-heading md:text-5xl">
            Crafted with Purpose, Curated with Care
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-subtext md:text-base">
            At One tooth World, we believe a beautiful home begins with intention. It&apos;s more than just
            aesthetics — it&apos;s about impact. We&apos;ve collaborated with 350+ Indian artisans and
            manufacturers to bring you furniture, lights, decor and kitchenware that last for
            generations.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Quality",
              body: "Timeless craftsmanship designed to last for generations. Every piece is vetted for materials, finish and build.",
            },
            {
              title: "Aesthetics with Meaning",
              body: "Thoughtfully designed pieces that tell a story and inspire — never mass-produced blandness.",
            },
            {
              title: "Sustainable & Curated Choices",
              body: "Curated with people and the planet in mind. We favour responsible makers and honest materials.",
            },
          ].map((v) => (
            <article key={v.title} className="rounded-block border border-line p-8">
              <h2 className="font-heading text-xl text-heading">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-subtext">{v.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-block bg-primary px-8 py-14 text-center text-white md:px-16">
          <h2 className="font-heading text-2xl text-white md:text-3xl">
            350+ verified manufacturers. One curated storefront.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/85">
            From small-batch brass workshops to precision furniture studios — One tooth World brings India&apos;s
            best makers to your home.
          </p>
          <div className="mt-8">
            <Button variant="white" href="/collections/all">
              Start shopping
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
