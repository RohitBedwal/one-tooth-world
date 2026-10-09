import { Marquee } from "../components/molecules/Marquee";
import { HeroCarousel, PromoBanner } from "../components/organisms/HeroCarousel";
import {
  CollectionCircleSection,
  ProductCarouselSection,
} from "../components/organisms/ProductSections";
import {
  ShopByRoom,
  TrendingThemes,
  BrandMarquee,
  InstagramFeed,
  ONABanner,
  AboutStrip,
} from "../components/organisms/ContentSections";
import { Container, Section } from "../components/atoms/Container";
import {
  announcementText,
  midMarqueeItems,
  valueMarqueeItems,
  mockCollections,
  promoBanners,
} from "../data/catalog";
import { useShopify } from "../context/ShopifyContext";

export function HomePage() {
  const { products } = useShopify();
  const bestsellers = products.filter((p) => p.collections.includes("bestsellers") || p.badges?.includes("Bestseller"));
  const newArrivals = products.filter((p) => p.collections.includes("new-arrivals") || p.badges?.includes("New Arrivals"));
  const centerTables = products.filter((p) => p.collections.includes("center-tables"));
  const pooja = products.filter((p) => p.collections.includes("pooja"));
  const lights = products.filter((p) => p.category === "Lighting");
  const decor = products.filter((p) => p.category === "Decor");

  return (
    <>
      <Marquee items={[announcementText]} duration={30} separatorIcon={<span aria-hidden>✦</span>} />
      <Container className="pt-4">
        <HeroCarousel />
      </Container>

      <Marquee items={midMarqueeItems} duration={35} variant="light" separatorIcon={<span aria-hidden>◆</span>} className="mt-12 border-y border-line" />

      <CollectionCircleSection collections={mockCollections} />

      <ProductCarouselSection title="Shop Our Bestsellers" products={bestsellers} viewAllHref="/collections/bestsellers" />

      <Container>
        <PromoBanner banner={promoBanners[0]} />
      </Container>

      <ShopByRoom />

      <ProductCarouselSection title="New Arrivals at One tooth World" products={newArrivals} viewAllHref="/collections/new-arrivals" />

      <Container>
        <PromoBanner banner={promoBanners[1]} />
      </Container>

      <ProductCarouselSection
        title="Center Table for Living Room"
        products={centerTables}
        viewAllHref="/collections/center-tables"
      />

      <ProductCarouselSection
        title="Must-Haves: Festive Pooja Essentials"
        products={pooja}
        viewAllHref="/collections/pooja"
        filterChips={[
          { label: "Diya & Diya Stand", filter: "diya" },
          { label: "Urli Bowl", filter: "urli" },
          { label: "Religious Idols", filter: "idol" },
          { label: "Incense Stick & Holder", filter: "incense" },
          { label: "Candle & Candle Stand", filter: "candle" },
        ]}
      />

      <ProductCarouselSection
        title="Ceiling & Hanging Lights for your space"
        products={lights}
        viewAllHref="/collections/ceiling-lights"
      />

      <TrendingThemes />

      <ONABanner />

      <ProductCarouselSection
        title="Home Decor Ideas & Finds"
        products={decor}
        viewAllHref="/collections/decor"
        filterChips={[
          { label: "Vases", filter: "vase" },
          { label: "Wall Decor", filter: "wall" },
          { label: "Mirrors", filter: "mirror" },
        ]}
      />

      <BrandMarquee title="300+ Amazing Brands On One tooth World" names={["Zago", "Nestasia", "WOODEN STORY", "Homesake", "Ambience", "One Tooth Studio", "The Yellow Door", "Chumbak", "Pepperfry Artisan", "Urban Ladder"]} />

      <InstagramFeed />

      <AboutStrip />

      <Section className="py-6">
        <Marquee items={valueMarqueeItems} duration={45} separatorIcon={<span aria-hidden>✦</span>} />
      </Section>
    </>
  );
}
