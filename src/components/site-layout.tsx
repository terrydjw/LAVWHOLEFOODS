import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site-data";
import { Leaf } from "lucide-react";
import icon2 from "@/assets/icon2.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src={icon2} alt="" className="h-13 w-90" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.phoneHref}
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
        >
          {site.phone}
        </a>
      </div>
      <nav className="flex items-center gap-1 overflow-x-auto border-t border-border px-4 py-2 md:hidden">
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            activeOptions={{ exact: n.to === "/" }}
            activeProps={{ className: "bg-secondary text-secondary-foreground" }}
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-foreground/80"
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" />
            </span>
            {site.name}
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {site.tagline}. Fresh food, friendly service, great value — every day of the year.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Visit us</h4>
          <p className="mt-3 text-sm text-muted-foreground">{site.address}</p>
          <p className="text-sm text-muted-foreground">{site.hours}</p>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-primary hover:underline">
            View on Google Maps →
          </a>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Get in touch</h4>
          <p className="mt-3 text-sm text-muted-foreground">
            <a href={site.phoneHref} className="hover:text-foreground">{site.phone}</a>
          </p>
          <p className="text-sm text-muted-foreground">
            <a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a>
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
