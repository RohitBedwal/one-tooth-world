import { useState, type FormEvent } from "react";
import { Container } from "../components/atoms/Container";
import { Input } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";

export function AccountPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // Wire to Shopify Customer Account API when ready
  };

  return (
    <Container size="narrow" className="py-16">
      <div className="mx-auto max-w-md rounded-block border border-line p-8">
        <h1 className="font-heading text-2xl text-heading">
          {mode === "login" ? "Log in" : "Create account"}
        </h1>
        <p className="mt-1 text-sm text-subtext">
          {mode === "login"
            ? "Access orders, wishlist and faster checkout."
            : "Join One tooth World for a faster, curated shopping experience."}
        </p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          {mode === "register" && <Input label="Full name" required />}
          <Input label="Email" type="email" required />
          <Input label="Password" type="password" required />
          <Button type="submit" fullWidth size="lg">
            {mode === "login" ? "Log in" : "Register"}
          </Button>
        </form>
        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "register" : "login")}
          className="mt-5 w-full text-center text-sm text-subtext underline-offset-4 hover:text-foreground hover:underline"
        >
          {mode === "login" ? "New here? Create an account" : "Already have an account? Log in"}
        </button>
      </div>
    </Container>
  );
}
