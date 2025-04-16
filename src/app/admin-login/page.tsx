"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLogin() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Validate credentials (maybe call API)
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-teal-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-teal-dark mb-6 text-center">Admin Login</h2>
        <Input type="email" placeholder="Email" className="mb-4" required />
        <Input type="password" placeholder="Password" className="mb-4" required />
        <Button type="submit" className="w-full bg-teal hover:bg-teal-light text-white">
          Login
        </Button>
      </form>
    </div>
  );
}
