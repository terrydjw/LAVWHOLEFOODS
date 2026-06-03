import { createFileRoute } from "@tanstack/react-router";
import { categories, site } from "@/lib/site-data";
import { PageShell } from "@/components/site-layout";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: `Products — ${site.name}` },
      { name: "description", content: `Browse our full range: fresh produce, Mediterranean, Turkish and Eastern European foods, dairy, bakery, snacks, groceries, wines and spirits.` },
      { property: "og:title", content: `Products — ${site.name}` },
      { property: "og:description", content: `Everything we stock in store, by category.` },
      { property: "og:url", content: "/products" },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <PageShell>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Our products</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            From fresh fruit and vegetables to Mediterranean dips, Turkish sweets, Eastern
            European staples, dairy, bakery, wines and spirits — explore everything we keep
            on the shelves.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80 hover:bg-secondary"
            >
              {c.name}
            </a>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        {categories.map((c) => (
          <section key={c.slug} id={c.slug} className="scroll-mt-24">
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-10">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">{c.name}</h2>
                <p className="mt-2 max-w-xl text-muted-foreground">{c.blurb}</p>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
