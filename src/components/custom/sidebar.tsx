"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ClipboardList, Apple, Dumbbell } from "lucide-react";
import LogoutButton from "@/components/custom/logout-button";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Avaliação Física",
    href: "/avaliacao",
    icon: ClipboardList,
  },
  {
    label: "Nutrição",
    href: "/nutricao",
    icon: Apple,
  },
  {
    label: "Treinos",
    href: "/treinos",
    icon: Dumbbell,
  },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center px-6 border-b">
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight">
            MindsetFit
          </span>
          <span className="text-[11px] text-muted-foreground">
            Nutrição · Treino · Performance
          </span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 pb-4 border-t pt-4">
        <div className="text-xs text-muted-foreground mb-2">
          Sessão autenticada
        </div>
        <LogoutButton />
      </div>
    </aside>
  );
}

export { Sidebar };
export default Sidebar;
