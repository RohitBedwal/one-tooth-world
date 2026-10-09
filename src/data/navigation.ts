export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  promoImages?: { image: string; label: string; href: string }[];
  badge?: string;
}

const img = (id: string) => `https://images.unsplash.com/${id}?w=300&q=80&auto=format&fit=crop`;

const allNav: NavItem[] = [
  { label: "Just In", href: "/collections/new-arrivals", badge: "New" },
  { label: "Ready to Ship", href: "/collections/ready-to-ship", badge: "⚡" },
  {
    label: "Lighting & Lamps",
    href: "/collections/lighting",
    children: [
      { label: "Ceiling & Hanging Lights", href: "/collections/ceiling-lights" },
      { label: "Wall Lights", href: "/collections/wall-lights" },
      { label: "Table Lamps", href: "/collections/table-lamps" },
      { label: "Spot Lights", href: "/collections/spot-lights" },
      { label: "Picture Lights", href: "/collections/picture-lights" },
      { label: "Bathroom Lights", href: "/collections/bathroom-lights" },
      { label: "Flush Mount", href: "/collections/flush-mount" },
      { label: "Floor Lamp", href: "/collections/floor-lamps" },
      { label: "Chandelier", href: "/collections/chandeliers" },
      { label: "Rechargeable Lamps", href: "/collections/rechargeable-lamps" },
      { label: "Outdoor Lights", href: "/collections/outdoor-lights" },
    ],
    promoImages: [
      { image: img("photo-1517991104123-1d56a6e81ed9"), label: "Pendant Lights", href: "/collections/pendant-lights" },
      { image: img("photo-1507473885765-e6ed057f782c"), label: "Table Lamps", href: "/collections/table-lamps" },
    ],
  },
  {
    label: "Furniture",
    href: "/collections/furniture",
    children: [
      { label: "TV Unit", href: "/collections/tv-units" },
      { label: "Storage Shelves & Racks", href: "/collections/shelves" },
      { label: "Wall Shelves", href: "/collections/wall-shelves" },
      { label: "Bookshelf", href: "/collections/bookshelves" },
      { label: "Shoe Rack", href: "/collections/shoe-racks" },
      { label: "Wardrobe", href: "/collections/wardrobes" },
      { label: "Sofas", href: "/collections/sofas" },
      { label: "Side Table", href: "/collections/side-tables" },
      { label: "Center Table", href: "/collections/center-tables" },
      { label: "Console Table", href: "/collections/console-tables" },
      { label: "Dining Set", href: "/collections/dining" },
      { label: "Beds", href: "/collections/beds" },
      { label: "Chairs", href: "/collections/chairs" },
      { label: "Cabinets & Sideboard", href: "/collections/cabinets" },
      { label: "Outdoor Furniture", href: "/collections/outdoor-furniture" },
      { label: "Bar Furniture", href: "/collections/bar-furniture" },
    ],
    promoImages: [
      { image: img("photo-1555041469-a586c61ea9bc"), label: "Console Tables", href: "/collections/console-tables" },
      { image: img("photo-1567538096630-e0c55bd6374c"), label: "Lounge Chairs", href: "/collections/lounge-chairs" },
    ],
  },
  {
    label: "Decor",
    href: "/collections/decor",
    children: [
      { label: "Wall Decor", href: "/collections/wall-decor" },
      { label: "Vase", href: "/collections/vases" },
      { label: "Planters", href: "/collections/planters" },
      { label: "Clocks", href: "/collections/clocks" },
      { label: "Rugs and Carpets", href: "/collections/rugs" },
      { label: "Mirrors", href: "/collections/mirrors" },
      { label: "Dried Flowers & Fragrance", href: "/collections/dried-flowers" },
      { label: "Pooja Essentials", href: "/collections/pooja" },
      { label: "Showpieces & Collectibles", href: "/collections/showpieces" },
      { label: "Candles & Candle Stand", href: "/collections/candles" },
      { label: "Cushion & Cushion Covers", href: "/collections/cushions" },
      { label: "Home Fragrances", href: "/collections/fragrances" },
    ],
    promoImages: [
      { image: img("photo-1578500494198-246f612d3b3d"), label: "Vases", href: "/collections/vases" },
      { image: img("photo-1618220179428-22790b461013"), label: "Wall Decor", href: "/collections/wall-decor" },
    ],
  },
  {
    label: "Home Fragrances",
    href: "/collections/fragrances",
    children: [
      { label: "Candles", href: "/collections/candles" },
      { label: "Aroma Oil Diffuser", href: "/collections/diffusers" },
      { label: "Incense Stick Holder", href: "/collections/incense" },
    ],
  },
  {
    label: "Kitchenware",
    href: "/collections/kitchenware",
    children: [
      { label: "Kitchen Storage & Organizer", href: "/collections/kitchen-storage" },
      { label: "Dinnerware", href: "/collections/dinnerware" },
      { label: "Barware", href: "/collections/barware" },
      { label: "Kitchen Utilities", href: "/collections/kitchen-utilities" },
      { label: "Drinkware", href: "/collections/drinkware" },
      { label: "Serveware", href: "/collections/serveware" },
      { label: "Cookware", href: "/collections/cookware" },
    ],
  },
  {
    label: "Utility",
    href: "/collections/utility",
    children: [
      { label: "Home Storage Organizer", href: "/collections/storage" },
      { label: "Bedding", href: "/collections/bedding" },
      { label: "Bathroom Accessories", href: "/collections/bathroom" },
      { label: "Laundry Organizer", href: "/collections/laundry" },
      { label: "Towels", href: "/collections/towels" },
    ],
  },
  {
    label: "Shop By Room",
    href: "/rooms",
    children: [
      { label: "Living Room", href: "/rooms/living-room" },
      { label: "Dining Room", href: "/rooms/dining-room" },
      { label: "Bedroom", href: "/rooms/bedroom" },
      { label: "Outdoor", href: "/rooms/outdoor" },
      { label: "Study Room", href: "/rooms/study-room" },
      { label: "Gifting", href: "/collections/gifting" },
    ],
  },
  { label: "Bestsellers", href: "/collections/bestsellers" },
  { label: "Bulk Inquiry", href: "/bulk-inquiry" },
  { label: "Sell with One tooth World", href: "/sell-with-us" },
  { label: "Track Your Order", href: "/track-order" },
];

// Desktop navbar — trimmed list so the bar never overflows
const desktopLabels = [
  "Just In",
  "Ready to Ship",
  "Lighting & Lamps",
  "Furniture",
  "Decor",
  "Kitchenware",
  "Shop By Room",
  "Bestsellers",
];
export const mainNav: NavItem[] = allNav.filter((item) => desktopLabels.includes(item.label));

// Mobile drawer — full list (utility links live here)
export const mobileNav: NavItem[] = allNav;
