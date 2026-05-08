import {
  LayoutDashboard,
  Link2,
  Bot,
  BarChart3,
  Settings
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Offers",
    icon: Link2
  },
  {
    title: "AI Studio",
    icon: Bot
  },
  {
    title: "Analytics",
    icon: BarChart3
  },
  {
    title: "Settings",
    icon: Settings
  }
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-[260px] flex-col border-r border-border bg-card p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-primary">
          Empire OS
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Affiliate System
        </p>
      </div>

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex items-center gap-4 rounded-2xl px-4 py-4 text-left transition hover:bg-secondary"
            >
              <Icon size={22} />

              <span className="text-base font-semibold">
                {item.title}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-border bg-secondary p-5">
        <h2 className="mb-2 text-lg font-bold">
          AI Engine Active
        </h2>

        <p className="text-sm text-slate-400">
          Automation systems are ready for scaling.
        </p>
      </div>
    </aside>
  );
}
