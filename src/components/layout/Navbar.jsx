import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-gold font-display text-lg font-bold">
            N
          </span>
          <span className="font-display text-[17px] font-semibold text-ink leading-tight">
            NLT<span className="text-ink-soft font-medium"> Mentorship</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-ink-soft">
          {isHome ? (
            <a href="#curriculum" className="hover:text-ink transition-colors">
              Curriculum
            </a>
          ) : (
            <Link to="/#curriculum" className="hover:text-ink transition-colors">
              Curriculum
            </Link>
          )}
          {isHome ? (
            <a href="#pricing" className="hover:text-ink transition-colors">
              Pricing
            </a>
          ) : (
            <Link to="/#pricing" className="hover:text-ink transition-colors">
              Pricing
            </Link>
          )}
          {isHome ? (
            <a href="#faq" className="hover:text-ink transition-colors">
              FAQ
            </a>
          ) : (
            <Link to="/#faq" className="hover:text-ink transition-colors">
              FAQ
            </Link>
          )}
        </nav>

        <div className="hidden md:block">
          <Button to="/checkout" variant="gold" size="sm" icon={ArrowUpRight}>
            Join Now
          </Button>
        </div>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-line bg-canvas px-5 py-5 flex flex-col gap-4">
          <a href="/#curriculum" className="text-ink font-medium" onClick={() => setOpen(false)}>
            Curriculum
          </a>
          <a href="/#pricing" className="text-ink font-medium" onClick={() => setOpen(false)}>
            Pricing
          </a>
          <a href="/#faq" className="text-ink font-medium" onClick={() => setOpen(false)}>
            FAQ
          </a>
          <Button to="/checkout" variant="gold" className="w-full mt-1" onClick={() => setOpen(false)}>
            Join Now
          </Button>
        </div>
      )}
    </header>
  );
}
