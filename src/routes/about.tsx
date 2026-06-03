import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site-data";
import { PageShell } from "@/components/site-layout";
import { Heart, Leaf, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      { name: "description", content: `${site.name} is a 24/7 supermarket in Archway, London offering fresh produce, Mediterranean, Turkish and Eastern European foods, dairy, snacks, groceries, wines and spirits.` },
      { property: "og:title", content: `About — ${site.name}` },
      { property: "og:description", content: `Quality products, friendly service, great value — every day of the year.` },
      { property: "og:url", content: "/about" },
    ],
  }),
  component: About,
});

const values = [
  { icon: Leaf, title: "Fresh first", desc: "Produce delivered daily, hand-picked for quality." },
  { icon: Heart, title: "Community led", desc: "Built around the neighbours who shop with us." },
  { icon: Sparkles, title: "Great value", desc: "Honest prices on the things you buy every week." },
  { icon: Users, title: "Always open", desc: "24/7, every day of the year — including holidays." },
];

function About() {
  return (
    <PageShell>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">About {site.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {site.tagline}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-foreground/85">
            <p>
              {site.name} is your local 24/7 supermarket in Archway, London, offering a
              wide selection of fresh fruit and vegetables, Mediterranean, Turkish and
              Eastern European foods, dairy products, snacks, groceries, wines and spirits.
            </p>
            <p>
              We are committed to providing quality products, friendly service, and great
              value for our community every day of the year. Visit us anytime for all your
              daily shopping needs.
            </p>
            <p>
              Whether you're picking up tonight's dinner, a late-night snack, or stocking
              up for the week — we're here whenever you need us.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <v.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
