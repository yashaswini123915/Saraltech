"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import VendorLayout from "@/components/vendor-layout";

export default function VendorSignup() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call signup API, send to admin approval list
    router.push("/vendor-pending");
  };

  return (
    <VendorLayout>
    <div className="flex items-center justify-center h-screen bg-teal-50">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-teal-dark mb-6 text-center">Vendor Sign Up</h2>
        <Input placeholder="Username" className="mb-4" required />
        <Input type="email" placeholder="Email" className="mb-4" required />
        <Input type="password" placeholder="Password" className="mb-4" required />
        <Button type="submit" className="w-full bg-teal-dark hover:bg-teal text-white">
          Request Approval
        </Button>
      </form>
    </div>
    </VendorLayout>
  );
}
