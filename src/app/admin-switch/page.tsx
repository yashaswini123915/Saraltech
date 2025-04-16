"use client";

import Link from "next/link";
import { User, Store } from "lucide-react";

export default function SwitchAccountPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-teal-dark text-white">
      <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-teal-dark mb-6"> Switch Account</h1>

        <div className="space-y-6">
          {/* Admin Option */}
          <div className="border border-teal-dark rounded-xl p-5 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-2">
              <User className="w-6 h-6 text-teal-dark" />
              <h2 className="text-lg font-semibold">Continue as Admin</h2>
            </div>
            <Link href="/">
              <button className="w-full bg-teal text-white rounded-lg py-2 hover:bg-teal-light transition">
                Go to Admin Dashboard
              </button>
            </Link>
          </div>

          {/* Vendor Option */}
          <div className="border border-teal-dark rounded-xl p-5 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-2">
              <Store className="w-6 h-6 text-teal-dark" />
              <h2 className="text-lg font-semibold">Continue as Vendor</h2>
            </div>
            <Link href="/vendor-login">
              <button className="w-full bg-teal text-white rounded-lg py-2 hover:bg-teal-light transition">
                Login as Vendor
              </button>
            </Link>
            <p className="text-sm mt-2 text-center">
              Don’t have an account?{" "}
              <Link href="/vendor-register" className="text-teal-dark underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
