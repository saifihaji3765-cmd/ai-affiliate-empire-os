export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            AI Affiliate Automation System
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Build Your
            <span className="text-primary"> AI Affiliate Empire</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
            Manage affiliate offers, generate AI content, automate traffic,
            track analytics, and scale commissions from multiple platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-white transition hover:scale-105">
              Launch Dashboard
            </button>

            <button className="rounded-2xl border border-border bg-secondary px-8 py-4 text-lg font-bold transition hover:scale-105">
              View Features
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold">
              AI Content Generator
            </h2>

            <p className="text-slate-300">
              Generate captions, scripts, hooks, blog posts, and viral social
              content automatically using AI.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold">
              Affiliate Offer Manager
            </h2>

            <p className="text-slate-300">
              Organize affiliate links, commissions, niches, EPC tracking, and
              smart routing from one dashboard.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold">
              Smart Analytics Engine
            </h2>

            <p className="text-slate-300">
              Track clicks, conversions, earnings, traffic sources, and top
              performing offers in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center text-slate-400">
        © 2026 AI Affiliate Empire OS. All rights reserved.
      </footer>
    </main>
  );
}
