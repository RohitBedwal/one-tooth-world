import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-center gap-2 rounded-block bg-primary/10 px-4 py-3 text-sm text-primary">
        <Check className="h-4 w-4" /> You&apos;re subscribed — welcome aboard!
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-pill border border-line bg-surface px-5 py-3 text-sm placeholder:text-subtext focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          type="submit"
          className="shrink-0 rounded-pill bg-primary px-7 py-3 text-sm font-medium text-on-primary transition-colors hover:bg-primary-dark"
        >
          Sign up
        </button>
      </div>
      <p className="mt-2 text-[11px] text-subtext">
        By subscribing you agree to the Terms of Use & Privacy Policy.
      </p>
    </form>
  );
}
