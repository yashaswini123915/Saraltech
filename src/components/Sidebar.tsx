"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Store ,
  List,
  Users,
  RefreshCw,
  Bell,
  LogOut,
  UserCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { href: "/admin-shops", label: "Shops", icon: <Store className="w-5 h-5" /> },
  { href: "/admin-categories", label: "Categories", icon: <List className="w-5 h-5" /> },
  { href: "/admin-vendors", label: "Vendors", icon: <Users className="w-5 h-5" /> },
  { href: "/switch-account", label: "Switch Account", icon: <RefreshCw className="w-5 h-5" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-teal-dark text-white p-4 flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <UserCircle className="w-8 h-8 text-white" />
          <span className="font-semibold">Admin</span>
        </div>

        <div className="relative">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 rounded-full">
            5
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        {sidebarLinks.map(({ href, label, icon }) => (
          <Link key={href} href={href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start mb-2 text-white",
                pathname === href && "bg-teal"
              )}
            >
              {icon}
              <span className="ml-3">{label}</span>
            </Button>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <Button variant="ghost" className="text-white justify-start">
        <LogOut className="w-5 h-5" />
        <span className="ml-3">Logout</span>
      </Button>
    </aside>
  );
}
