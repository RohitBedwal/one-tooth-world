import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../../data/catalog";
import { Button } from "../atoms/Button";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[index];

  return (
    <section aria-label="Featured banners" className="group relative overflow-hidden rounded-block">
      <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <motion.img
              src={slide.image}
              alt={slide.title}
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "linear" }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 pb-12 text-white md:p-12 md:pb-16 lg:p-16 lg:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="max-w-xl"
              >
                <h1 className="font-heading text-3xl leading-tight text-white md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-3 text-sm text-white/90 md:text-lg">{slide.subtitle}</p>
                <div className="mt-6">
                  <Button variant="white" size="lg" href={slide.href}>
                    {slide.cta}
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2.5 opacity-0 shadow transition-opacity hover:bg-white group-hover:opacity-100"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2.5 opacity-0 shadow transition-opacity hover:bg-white group-hover:opacity-100"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 right-6 z-10 rounded-pill bg-foreground/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {index + 1} / {total}
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-pill transition-all ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

interface PromoBannerProps {
  banner: { id: string; image: string; title: string; subtitle: string; cta: string; href: string };
}

export function PromoBanner({ banner }: PromoBannerProps) {
  return (
    <Link to={banner.href} className="group relative block overflow-hidden rounded-block">
      <div className="relative aspect-[21/8]">
        <motion.img
          src={banner.image}
          alt={banner.title}
          loading="lazy"
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 to-transparent" />
        <div className="absolute inset-y-0 left-0 flex max-w-lg flex-col justify-center p-8 text-white md:p-14">
          <h2 className="font-heading text-2xl leading-tight text-white md:text-4xl">{banner.title}</h2>
          <p className="mt-2 text-sm text-white/90 md:text-base">{banner.subtitle}</p>
          <span className="mt-5 inline-flex w-fit rounded-pill bg-white px-6 py-3 text-sm font-medium text-foreground transition-transform group-hover:scale-105">
            {banner.cta}
          </span>
        </div>
      </div>
    </Link>
  );
}
