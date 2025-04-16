"use client";

import Link from "next/link";
import { ArrowRightCircle } from "lucide-react"; // Make sure to import the right icon

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-gray-100 relative">
        {/* Right Arrow Button */}
        <Link href="/admin-login">
          <div className="absolute top-4 right-4">
            <ArrowRightCircle className="w-8 h-8 text-teal" />
          </div>
        </Link>

        {/* Main Content */}
        {children}
      </main>
    </div>
  );
}
