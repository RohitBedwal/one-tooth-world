export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  available: boolean;
  sku?: string;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  subtitle?: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  image?: string;
  hoverImage?: string;
  badges?: string[];
  rating?: number;
  reviewCount?: number;
  category: string;
  collections: string[];
  variants: ProductVariant[];
  description: string;
  sku?: string;
  available: boolean;
  tags?: string[];
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  image?: string;
  subtitle?: string;
  productCount?: number;
}

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const mockProducts: Product[] = [
  {
    id: "p1",
    handle: "ash-black-curve-console-table",
    title: "Ash Black Curve Console Table for Living Room",
    price: 16616,
    compareAtPrice: 24999,
    images: [img("photo-1555041469-a586c61ea9bc"), img("photo-1567538096630-e0c55bd6374c")],
    badges: ["Grand Sale", "Hot Seller"],
    rating: 5,
    reviewCount: 1,
    category: "Furniture",
    collections: ["bestsellers", "center-tables"],
    available: true,
    description:
      "A sculptural console table with a graceful curved silhouette. Crafted in solid wood with a matte ash-black finish, it elevates entryways and living spaces.",
    variants: [
      { id: "v1", title: "Default", price: 16616, compareAtPrice: 24999, available: true },
    ],
  },
  {
    id: "p2",
    handle: "mini-flushed-led-ceiling-light",
    title: "Mini Flushed 6W LED Ceiling Light",
    price: 2244,
    compareAtPrice: 3499,
    images: [img("photo-1524484485831-a92ffc0de03f"), img("photo-1513506003901-1e6a229e2d15")],
    badges: ["Designer Edition", "Bestseller"],
    rating: 5,
    reviewCount: 1,
    category: "Lighting",
    collections: ["bestsellers", "ceiling-lights"],
    available: true,
    description:
      "Minimal flushed ceiling light with warm LED glow. Perfect for bedrooms and hallways where subtle, even illumination matters.",
    variants: [
      { id: "v2", title: "Warm White", price: 2244, compareAtPrice: 3499, available: true },
    ],
  },
  {
    id: "p3",
    handle: "ladwing-natural-ladder-bookshelf",
    title: "Ladwing Natural Ladder Bookshelf for Home",
    price: 13959,
    compareAtPrice: 19999,
    images: [img("photo-1594620302200-9a762244a156"), img("photo-1507842217343-583bb7270b66")],
    badges: ["Hot Seller"],
    rating: 5,
    reviewCount: 1,
    category: "Furniture",
    collections: ["bestsellers", "shelves"],
    available: true,
    description:
      "Leaning ladder bookshelf in natural solid wood. A breezy, renter-friendly way to style books, plants and objects.",
    variants: [
      { id: "v3", title: "Natural", price: 13959, compareAtPrice: 19999, available: true },
    ],
  },
  {
    id: "p4",
    handle: "brass-antique-wall-lamp",
    title: "Brass Antique Finish Corrugated Wall Lamp",
    price: 2849,
    compareAtPrice: 4299,
    images: [img("photo-1540932239986-30128078f3c5"), img("photo-1507473885765-e6ed057f782c")],
    badges: ["Bestseller"],
    rating: 5,
    reviewCount: 2,
    category: "Lighting",
    collections: ["bestsellers", "wall-lights"],
    available: true,
    description:
      "Corrugated brass sconce with an antique patina. Casts a warm, textured wash of light along the wall.",
    variants: [
      { id: "v4", title: "Antique Brass", price: 2849, compareAtPrice: 4299, available: true },
    ],
  },
  {
    id: "p5",
    handle: "logatto-sheesham-coffee-table",
    title: "Logatto Sheesham Wood Coffee Table with Storage",
    price: 11762,
    compareAtPrice: 17499,
    images: [img("photo-1533090481720-856c6e3c1fdc"), img("photo-1493663284031-b7e3aefcae8e")],
    badges: ["Hot Seller"],
    rating: 5,
    reviewCount: 3,
    category: "Furniture",
    collections: ["bestsellers", "center-tables"],
    available: true,
    description:
      "Solid Sheesham coffee table with open storage shelf. Natural grain patterns make every piece one of a kind.",
    variants: [
      { id: "v5", title: "Natural Sheesham", price: 11762, compareAtPrice: 17499, available: true },
    ],
  },
  {
    id: "p6",
    handle: "daisy-cluster-pendant-lights",
    title: "Daisy Cluster Hanging Pendant Lights for Ceiling",
    price: 9999,
    compareAtPrice: 14999,
    images: [img("photo-1517991104123-1d56a6e81ed9"), img("photo-1543198126-a8ad8e47fb22")],
    badges: ["Trending Now", "Ready to Ship", "Bestseller"],
    rating: 5,
    reviewCount: 1,
    category: "Lighting",
    collections: ["bestsellers", "ceiling-lights", "new-arrivals"],
    available: true,
    description:
      "A playful cluster of daisy-shaped pendants in frosted glass. Instantly becomes the centrepiece of any dining nook.",
    variants: [
      { id: "v6", title: "Cluster of 5", price: 9999, compareAtPrice: 14999, available: true },
    ],
  },
  {
    id: "p7",
    handle: "sheesham-dining-set-six-seater",
    title: "Sheesham Wood Dining Set Six Seater With Bench",
    price: 44863,
    compareAtPrice: 64999,
    images: [img("photo-1617806118233-18e1de247200"), img("photo-1595428774223-ef52624120d2")],
    badges: ["Premium Edition", "Hot Seller"],
    rating: 4.8,
    reviewCount: 12,
    category: "Furniture",
    collections: ["bestsellers", "dining"],
    available: true,
    description:
      "Six-seater Sheesham dining set with a matching bench. Sturdy joinery and a warm natural finish built for everyday meals.",
    variants: [
      { id: "v7", title: "6 Seater + Bench", price: 44863, compareAtPrice: 64999, available: true },
    ],
  },
  {
    id: "p8",
    handle: "kasane-mini-table-lamp",
    title: "Kasane Mini Table Lamp",
    price: 2429,
    compareAtPrice: 3999,
    images: [img("photo-1507473885765-e6ed057f782c"), img("photo-1534073828943-f801091bb18c")],
    badges: ["New Arrivals"],
    rating: 4.9,
    reviewCount: 8,
    category: "Lighting",
    collections: ["new-arrivals", "table-lamps"],
    available: true,
    description:
      "Compact layered table lamp with a soft linen shade — a quiet glow for bedside tables and desks.",
    variants: [
      { id: "v8", title: "Beige", price: 2429, compareAtPrice: 3999, available: true },
    ],
  },
  {
    id: "p9",
    handle: "maiori-table-lamp",
    title: "Maiori Table Lamp for Living Room",
    price: 6999,
    compareAtPrice: 9999,
    images: [img("photo-1534073828943-f801091bb18c"), img("photo-1507473885765-e6ed057f782c")],
    badges: ["New Arrivals"],
    rating: 4.7,
    reviewCount: 4,
    category: "Lighting",
    collections: ["new-arrivals", "table-lamps"],
    available: true,
    description:
      "Sculptural ceramic base with a tailored shade. The Maiori lamp layers warmth into any corner.",
    variants: [
      { id: "v9", title: "Ivory", price: 6999, compareAtPrice: 9999, available: true },
    ],
  },
  {
    id: "p10",
    handle: "void-limestone-wall-clock",
    title: "Void - Limestone Wall Clock",
    price: 4500,
    compareAtPrice: 6500,
    images: [img("photo-1563861826100-9cb868fdbe1c"), img("photo-1495364141860-b0d03eccd065")],
    badges: ["New Arrivals"],
    rating: 4.8,
    reviewCount: 6,
    category: "Decor",
    collections: ["new-arrivals", "decor"],
    available: true,
    description:
      "Carved from natural limestone with a voided centre. A clock that reads as wall art first.",
    variants: [
      { id: "v10", title: "Limestone", price: 4500, compareAtPrice: 6500, available: true },
    ],
  },
  {
    id: "p11",
    handle: "osaka-accent-chair",
    title: "Osaka Accent Chair for Living Room",
    price: 44199,
    compareAtPrice: 59999,
    images: [img("photo-1567538096630-e0c55bd6374c"), img("photo-1586023492125-27b2c045efd7")],
    badges: ["New Arrivals", "Premium Edition"],
    rating: 4.9,
    reviewCount: 9,
    category: "Furniture",
    collections: ["new-arrivals", "chairs"],
    available: true,
    description:
      "Low-slung Osaka accent chair with curved arms and bouclé upholstery. Japanese-inspired calm for modern homes.",
    variants: [
      { id: "v11", title: "Bouclé Cream", price: 44199, compareAtPrice: 59999, available: true },
    ],
  },
  {
    id: "p12",
    handle: "kanso-media-console",
    title: "Kanso Media Console for TV Units",
    price: 67999,
    compareAtPrice: 89999,
    images: [img("photo-1493663284031-b7e3aefcae8e"), img("photo-1533090481720-856c6e3c1fdc")],
    badges: ["New Arrivals"],
    rating: 5,
    reviewCount: 3,
    category: "Furniture",
    collections: ["new-arrivals", "tv-units"],
    available: true,
    description:
      "Low-profile media console in fluted oak with soft-close storage. Designed for calm, cord-free living rooms.",
    variants: [
      { id: "v12", title: "Oak", price: 67999, compareAtPrice: 89999, available: true },
    ],
  },
  {
    id: "p13",
    handle: "medium-kalash-akhand-jyot",
    title: "Medium Kalash Akhand Jyot for Pooja",
    price: 1166,
    compareAtPrice: 1899,
    images: [img("photo-1604608672516-f1b9b1d37076"), img("photo-1578662996442-48f60103fc96")],
    badges: ["Must Have", "Bestseller"],
    rating: 4.9,
    reviewCount: 21,
    category: "Decor",
    collections: ["pooja", "festive"],
    available: true,
    description:
      "Brass Kalash akhand jyot with intricate detailing — a timeless piece for the pooja room.",
    variants: [
      { id: "v13", title: "Medium", price: 1166, compareAtPrice: 1899, available: true },
    ],
  },
  {
    id: "p14",
    handle: "silver-peacock-diya",
    title: "Pure Silver Plated Brass Peacock Diya",
    price: 1699,
    compareAtPrice: 2599,
    images: [img("photo-1605649487212-47bdab064df7"), img("photo-1604608672516-f1b9b1d37076")],
    badges: ["Must Have"],
    rating: 4.8,
    reviewCount: 15,
    category: "Decor",
    collections: ["pooja", "festive"],
    available: true,
    description:
      "Silver-plated brass diya shaped as a peacock. Hand-finished, perfect for festivals and gifting.",
    variants: [
      { id: "v14", title: "Silver", price: 1699, compareAtPrice: 2599, available: true },
    ],
  },
  {
    id: "p15",
    handle: "elephant-tealight-holder",
    title: "Elephant Tealight Holder Set of 2",
    price: 385,
    compareAtPrice: 699,
    images: [img("photo-1578662996442-48f60103fc96"), img("photo-1605649487212-47bdab064df7")],
    badges: ["Bestseller"],
    rating: 4.7,
    reviewCount: 42,
    category: "Decor",
    collections: ["pooja", "festive"],
    available: true,
    description:
      "Set of two handcrafted elephant tealight holders in antique brass finish.",
    variants: [
      { id: "v15", title: "Set of 2", price: 385, compareAtPrice: 699, available: true },
    ],
  },
  {
    id: "p16",
    handle: "gold-two-layer-urli",
    title: "Decorative Gold Two Layer Urli",
    price: 1665,
    compareAtPrice: 2799,
    images: [img("photo-1610701596007-11502861dcfa"), img("photo-1604608672516-f1b9b1d37076")],
    badges: ["Must Have", "Bestseller"],
    rating: 4.9,
    reviewCount: 33,
    category: "Decor",
    collections: ["pooja", "festive", "decor"],
    available: true,
    description:
      "Two-tier gold-finish urli for floating flowers and diyas. A festive centrepiece with lasting presence.",
    variants: [
      { id: "v16", title: "Gold", price: 1665, compareAtPrice: 2799, available: true },
    ],
  },
  {
    id: "p17",
    handle: "aqua-wave-terra-vase",
    title: "Aqua Wave Terra Vase",
    price: 2159,
    compareAtPrice: 3299,
    images: [img("photo-1578500494198-246f612d3b3d"), img("photo-1581783342308-f792dbdd27c5")],
    badges: ["New Arrivals", "Grand Sale"],
    rating: 4.8,
    reviewCount: 7,
    category: "Decor",
    collections: ["new-arrivals", "decor", "vases"],
    available: true,
    description:
      "Hand-thrown terra vase with an aqua wave glaze. Each piece carries its own personality.",
    variants: [
      { id: "v17", title: "Aqua", price: 2159, compareAtPrice: 3299, available: true },
    ],
  },
  {
    id: "p18",
    handle: "coastal-breeze-vase",
    title: "Coastal Breeze Vase",
    price: 2627,
    compareAtPrice: 3999,
    images: [img("photo-1581783342308-f792dbdd27c5"), img("photo-1578500494198-246f612d3b3d")],
    badges: ["New Arrivals", "Grand Sale"],
    rating: 4.9,
    reviewCount: 5,
    category: "Decor",
    collections: ["new-arrivals", "decor", "vases"],
    available: true,
    description:
      "Tall ceramic vase in coastal blues. Built for dried stems, pampas, or standing alone.",
    variants: [
      { id: "v18", title: "Coastal", price: 2627, compareAtPrice: 3999, available: true },
    ],
  },
];

export const mockCollections: Collection[] = [
  { id: "c1", handle: "side-tables", title: "Side Table", image: img("photo-1533090481720-856c6e3c1fdc", 400), productCount: 120 },
  { id: "c2", handle: "coffee-tables", title: "Coffee Table", image: img("photo-1493663284031-b7e3aefcae8e", 400), productCount: 98 },
  { id: "c3", handle: "console-tables", title: "Console Table", image: img("photo-1555041469-a586c61ea9bc", 400), productCount: 76 },
  { id: "c4", handle: "tv-units", title: "TV Unit", image: img("photo-1593359677879-a4bb92f829d1", 400), productCount: 64 },
  { id: "c5", handle: "lounge-chairs", title: "Lounge Chair", image: img("photo-1567538096630-e0c55bd6374c", 400), productCount: 85 },
  { id: "c6", handle: "wall-lights", title: "Wall Lights", image: img("photo-1540932239986-30128078f3c5", 400), productCount: 150 },
  { id: "c7", handle: "pendant-lights", title: "Pendant Lights", image: img("photo-1517991104123-1d56a6e81ed9", 400), productCount: 132 },
  { id: "c8", handle: "table-lamps", title: "Table Lamps", image: img("photo-1507473885765-e6ed057f782c", 400), productCount: 110 },
  { id: "c9", handle: "floor-lamps", title: "Floor Lamp", image: img("photo-1513506003901-1e6a229e2d15", 400), productCount: 54 },
  { id: "c10", handle: "showpieces", title: "Showpieces", image: img("photo-1581783342308-f792dbdd27c5", 400), productCount: 200 },
  { id: "c11", handle: "vases", title: "Vase", image: img("photo-1578500494198-246f612d3b3d", 400), productCount: 180 },
  { id: "c12", handle: "mirrors", title: "Mirrors", image: img("photo-1618220179428-22790b461013", 400), productCount: 90 },
];

export const rooms: Collection[] = [
  { id: "r1", handle: "living-room", title: "Living Room", image: img("photo-1586023492125-27b2c045efd7", 700) },
  { id: "r2", handle: "bedroom", title: "Bedroom", image: img("photo-1505693416388-ac5ce068fe85", 700) },
  { id: "r3", handle: "dining-room", title: "Dining Room", image: img("photo-1617806118233-18e1de247200", 700) },
  { id: "r4", handle: "study-room", title: "Study Room", image: img("photo-1518455027359-f3f8164ba6bd", 700) },
  { id: "r5", handle: "outdoor", title: "Outdoor", image: img("photo-1600585154340-be6161a56a0c", 700) },
];

export const heroSlides = [
  {
    id: "h1",
    image: img("photo-1616486338812-3dadae4b4ace", 1920),
    title: "Grand Sajawat Sale",
    subtitle: "Upto 65% Off on Furniture, Lights & Decor",
    cta: "Shop Now",
    href: "/collections/grand-sale",
  },
  {
    id: "h2",
    image: img("photo-1555041469-a586c61ea9bc", 1920),
    title: "Hot Sellers",
    subtitle: "Handpicked pieces India loves",
    cta: "Explore",
    href: "/collections/hot-seller",
  },
  {
    id: "h3",
    image: img("photo-1578662996442-48f60103fc96", 1920),
    title: "Festive Gifting",
    subtitle: "Curated gifts for every celebration",
    cta: "Discover",
    href: "/collections/festive-gifting",
  },
];

export const promoBanners = [
  {
    id: "pb1",
    image: img("photo-1600210492486-724fe5c67fb0", 1920),
    title: "Refresh Your Space",
    subtitle: "New season, new accents — upto 40% off",
    cta: "Shop the Sale",
    href: "/collections/grand-sale",
  },
  {
    id: "pb2",
    image: img("photo-1618221195710-dd6b41faaea6", 1920),
    title: "The Art of Slow Living",
    subtitle: "Japandi-inspired finds for calm homes",
    cta: "Explore Collection",
    href: "/collections/japandi",
  },
];

export const trendingThemes = [
  { id: "t1", title: "Modern Decor", subtitle: "Effortless Style for Everyday Life", image: img("photo-1618220179428-22790b461013", 600) },
  { id: "t2", title: "Brass & Silver", subtitle: "Timeless Craft with Brass & Silver", image: img("photo-1604608672516-f1b9b1d37076", 600) },
  { id: "t3", title: "Japandi Decor", subtitle: "Blend of Japanese & Scandinavian style", image: img("photo-1615529182904-14819c35db37", 600) },
  { id: "t4", title: "Designer Collection", subtitle: "Selective & Rare finds", image: img("photo-1616486338812-3dadae4b4ace", 600) },
  { id: "t5", title: "Side Tables", subtitle: "The little detail that completes your room", image: img("photo-1533090481720-856c6e3c1fdc", 600) },
];

export const brands = [
  "Zago", "Nestasia", "WOODEN STORY", "Homesake", "Ambience",
  "One Tooth Studio", "The Yellow Door", "Chumbak", "Live In Yours", "Pepperfry Artisan",
  "Urban Ladder", "Home Centre",
];

export const pressLogos = ["Vogue", "Architectural Digest", "Elle Decor", "HT Mint", "YourStory", "The Better India"];

export const testimonials = [
  { id: "tm1", name: "Tarun Yogi", quote: "The console table completely changed our entryway. Quality is outstanding.", image: img("photo-1615874959474-d609969a20ed", 400) },
  { id: "tm2", name: "Warren", quote: "Fast delivery and the lamp looks even better in person.", image: img("photo-1616627561950-9f746e330187", 400) },
  { id: "tm3", name: "Shibani Bedi", quote: "One tooth World has the best curation for Indian homes. Loved every piece.", image: img("photo-1560448204-e02f11c3d0e2", 400) },
  { id: "tm4", name: "Ankush Bahuguna", quote: "Their pooja collection is gorgeous and so well made.", image: img("photo-1600566753190-17f0baa2a6c3", 400) },
  { id: "tm5", name: "Nikhita", quote: "Customer service helped me pick the right sofa. 10/10.", image: img("photo-1600607687939-ce8a6c25118c", 400) },
];

export const footerColumns = [
  {
    title: "Shop By",
    links: [
      { label: "Furniture", href: "/collections/furniture" },
      { label: "Lighting", href: "/collections/lighting" },
      { label: "Kitchenware", href: "/collections/kitchenware" },
      { label: "Decor", href: "/collections/decor" },
      { label: "Tables", href: "/collections/tables" },
    ],
  },
  {
    title: "More Information",
    links: [
      { label: "Sell on One tooth World", href: "/sell-with-us" },
      { label: "Designer Collection", href: "/collections/designer" },
      { label: "Shop by Theme", href: "/collections/themes" },
      { label: "Partner with us", href: "/sell-with-us" },
      { label: "One tooth World Gift Card", href: "/products/gift-card" },
      { label: "Shop by Brand", href: "/collections/brands" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { label: "Never Asked Questions", href: "/pages/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Interior consultation", href: "/pages/consultation" },
      { label: "Contact us", href: "/contact" },
      { label: "Careers at One tooth World", href: "/pages/careers" },
    ],
  },
];

export const contactCards = [
  { title: "Customer Care", detail: "Call or WhatsApp at +91 7223002939", icon: "message" as const },
  { title: "For Partnership Query", detail: "Call or WhatsApp at +91 9039419933", icon: "handshake" as const },
  { title: "Business / Sell on One tooth World", detail: "business@onetooth.world", icon: "store" as const },
  { title: "For Bulk Orders", detail: "Please Fill The Form", icon: "package" as const },
];

export const valueMarqueeItems = [
  "350+ Verified Manufacturers",
  "Free Shipping & PAN India Delivery",
  "Easy returns & exchange",
  "Authentic & Quality Assured",
  "Personalized Shopping Assistance",
];

export const midMarqueeItems = [
  "For spaces with a point of view",
  "300+ Handpicked Brands",
  "India's most curated platform",
];

export const announcementText = "Grand Sajawat Sale is Live Now Upto 65% Off | Use Code ONETOOTH";
