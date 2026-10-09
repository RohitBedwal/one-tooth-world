import { Container } from "../components/atoms/Container";
import { Button } from "../components/atoms/Button";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <Container className="py-24 text-center">
      <p className="font-heading text-7xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-heading text-3xl text-heading">Page not found</h1>
      <p className="mt-2 text-sm text-subtext">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to home</Button>
        <Link
          to="/collections/all"
          className="inline-flex items-center rounded-pill border border-line-strong px-6 py-3 text-sm font-medium hover:border-foreground"
        >
          Shop all products
        </Link>
      </div>
    </Container>
  );
}
