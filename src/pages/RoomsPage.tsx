import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";
import { ProductGrid } from "../components/organisms/ProductSections";
import { useShopify } from "../context/ShopifyContext";
import { rooms } from "../data/catalog";
import { Link } from "react-router-dom";

export function RoomsPage() {
  const { products } = useShopify();

  return (
    <Container className="py-10 md:py-14">
      <SectionHeading title="Shop by Room" subtitle="Curated setups for every corner of your home" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Link
            key={room.id}
            to={`/collections/${room.handle}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-block"
          >
            <img
              src={room.image}
              alt={room.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <h3 className="absolute bottom-5 left-5 font-heading text-2xl text-white">{room.title}</h3>
          </Link>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading title="Popular right now" viewAllHref="/collections/all" />
        <ProductGrid products={products.slice(0, 8)} />
      </div>
    </Container>
  );
}
