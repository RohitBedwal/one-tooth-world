import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/organisms/Layout";
import { HomePage } from "../pages/HomePage";

const CollectionPage = lazy(() => import("../pages/CollectionPage").then((m) => ({ default: m.CollectionPage })));
const ProductPage = lazy(() => import("../pages/ProductPage").then((m) => ({ default: m.ProductPage })));
const CartPage = lazy(() => import("../pages/CartPage").then((m) => ({ default: m.CartPage })));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage").then((m) => ({ default: m.CheckoutPage })));
const WishlistPage = lazy(() => import("../pages/WishlistPage").then((m) => ({ default: m.WishlistPage })));
const SearchPage = lazy(() => import("../pages/SearchPage").then((m) => ({ default: m.SearchPage })));
const AccountPage = lazy(() => import("../pages/AccountPage").then((m) => ({ default: m.AccountPage })));
const AboutPage = lazy(() => import("../pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("../pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const RoomsPage = lazy(() => import("../pages/RoomsPage").then((m) => ({ default: m.RoomsPage })));
const TrackOrderPage = lazy(() => import("../pages/TrackOrderPage").then((m) => ({ default: m.TrackOrderPage })));
const BulkInquiryPage = lazy(() => import("../pages/BulkInquiryPage").then((m) => ({ default: m.BulkInquiryPage })));
const SellWithUsPage = lazy(() => import("../pages/SellWithUsPage").then((m) => ({ default: m.SellWithUsPage })));
const PolicyPage = lazy(() => import("../pages/PolicyPage").then((m) => ({ default: m.PolicyPage })));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-primary" />
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/collections/:handle" element={<CollectionPage />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/products/:handle" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:handle" element={<RoomsPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
          <Route path="/bulk-inquiry" element={<BulkInquiryPage />} />
          <Route path="/sell-with-us" element={<SellWithUsPage />} />
          <Route path="/policies/:handle" element={<PolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
