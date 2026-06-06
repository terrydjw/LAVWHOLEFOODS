import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { categories, site } from "@/lib/site-data";
import { PageShell } from "@/components/site-layout";
import { Clock, MapPin, Phone, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — 24/7 Whole Food Supermarket in Archway` },
      { name: "description", content: `${site.name}: your 24/7 neighbourhood supermarket in Archway, London. Fresh produce, Mediterranean, Turkish and Eastern European foods, dairy, wines and more.` },
      { property: "og:title", content: `${site.name} — 24/7 Whole Food Supermarket` },
      { property: "og:description", content: `Fresh food, friendly service, great value — every day of the year.` },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <Clock className="h-3.5 w-3.5" /> Open 24 hours · 7 days
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Fresh whole foods, <span className="text-primary">any time</span> of day.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {site.name} is a 24/7 supermarket in Archway, London offering fresh produce, Mediterranean, Ethnic products and Eastern European foods, vegan, gluten-free, dairy, snacks, groceries, wines and spirits.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Browse products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Visit the shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, title: "Open 24/7", desc: "Every day of the year." },
            { icon: MapPin, title: "Archway, London", desc: "On your doorstep." },
            { icon: Truck, title: "Fresh daily", desc: "Produce in every morning." },
            { icon: Phone, title: site.phone, desc: "Call us anytime." },
          ].map((h) => (
            <div key={h.title} className="rounded-2xl border border-border bg-card p-5">
              <h.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-semibold">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Shop by category</h2>
            <p className="mt-2 text-muted-foreground">A taste of everything we stock in store.</p>
          </div>
          <Link to="/products" className="hidden text-sm font-medium text-primary hover:underline sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/products"
              hash={c.slug}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pop in any time.</h2>
              <p className="mt-3 max-w-md text-primary-foreground/80">
                We're always open. Stop by for your weekly shop or a midnight snack — we'll be here.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90">
                Get directions
              </a>
              <a href={site.phoneHref} className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
