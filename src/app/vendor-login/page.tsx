"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import VendorLayout from "@/components/vendor-layout";

export default function VendorLogin() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Validate & call backend API
    router.push("/vendor-dashboard"); // after successful login
  };

  return (
    <VendorLayout>
    <div className="flex items-center justify-center h-screen bg-teal-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-teal-dark mb-6 text-center">Vendor Login</h2>
        <Input type="email" placeholder="Email" className="mb-4" required />
        <Input type="password" placeholder="Password" className="mb-4" required />
        <Button type="submit" className="w-full bg-teal hover:bg-teal-light text-white">
          Login
        </Button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/vendor-signup")}
            className="text-teal cursor-pointer underline"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
    </VendorLayout>
  );
}
