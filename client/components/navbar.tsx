export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-8 py-5">
      <div>
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-sm text-slate-400">
          Welcome back to your AI Affiliate Empire
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:scale-105">
          Generate AI Content
        </button>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold">
          R
        </div>
      </div>
    </header>
  );
}
