import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const stats = [
  {
    title: "Total Clicks",
    value: "24,580"
  },
  {
    title: "Conversions",
    value: "1,284"
  },
  {
    title: "Revenue",
    value: "$12,940"
  },
  {
    title: "Active Offers",
    value: "48"
  }
];

const offers = [
  {
    name: "AI Writing Tool",
    platform: "Digistore24",
    commission: "$420"
  },
  {
    name: "Trading Masterclass",
    platform: "ClickBank",
    commission: "$280"
  },
  {
    name: "VPN Offer",
    platform: "WarriorPlus",
    commission: "$190"
  }
];

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <section className="flex flex-1 flex-col">
        <Navbar />

        <div className="flex-1 p-8">
          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <p className="mb-3 text-sm text-slate-400">
                  {item.title}
                </p>

                <h2 className="text-4xl font-extrabold">
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          {/* AI Section */}
          <div className="mt-10 rounded-3xl border border-border bg-card p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="mb-3 text-3xl font-bold">
                  AI Content Generator
                </h2>

                <p className="max-w-2xl text-slate-400">
                  Generate affiliate captions, hooks, blog posts,
                  social media content, and viral scripts instantly
                  using AI.
                </p>
              </div>

              <button className="rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-white transition hover:scale-105">
                Generate Content
              </button>
            </div>
          </div>

          {/* Offers Table */}
          <div className="mt-10 rounded-3xl border border-border bg-card p-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                Top Affiliate Offers
              </h2>

              <button className="rounded-2xl bg-secondary px-6 py-3 font-semibold">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-4 text-slate-400">
                      Offer
                    </th>

                    <th className="pb-4 text-slate-400">
                      Platform
                    </th>

                    <th className="pb-4 text-slate-400">
                      Commission
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {offers.map((offer) => (
                    <tr
                      key={offer.name}
                      className="border-b border-border"
                    >
                      <td className="py-5 text-lg font-semibold">
                        {offer.name}
                      </td>

                      <td className="py-5 text-slate-300">
                        {offer.platform}
                      </td>

                      <td className="py-5 font-bold text-primary">
                        {offer.commission}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
