import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site-data";
import { PageShell } from "@/components/site-layout";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      { name: "description", content: `Get in touch with ${site.name}. Call ${site.phone} or visit us in Archway, London. Open 24/7, every day of the year.` },
      { property: "og:title", content: `Contact — ${site.name}` },
      { property: "og:description", content: `Phone, email and directions for ${site.name}.` },
      { property: "og:url", content: "/contact" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Address", value: site.address, href: site.mapsUrl, external: true },
    { icon: Clock, label: "Hours", value: site.hours },
  ];

  return (
    <PageShell>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Contact us</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Questions, requests, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <ul className="space-y-4">
            {items.map((it) => (
              <li key={it.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-secondary text-primary">
                  <it.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">{it.label}</div>
                  {it.href ? (
                    <a
                      href={it.href}
                      target={it.external ? "_blank" : undefined}
                      rel={it.external ? "noreferrer" : undefined}
                      className="text-lg font-medium text-foreground hover:text-primary"
                    >
                      {it.value}
                    </a>
                  ) : (
                    <div className="text-lg font-medium">{it.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <iframe
              title="Map to LAV Whole Food"
              src={site.mapsEmbedUrl}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
