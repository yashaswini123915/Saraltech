"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AdminLayout from "@/components/AdminLayout";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [totalVendors, setTotalVendors] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    // Simulated fetch - replace with your real APIs
    const fetchStats = async () => {
      try {
        // Example: Replace these with actual API calls if available
        setTotalVendors(25);
        setTotalCategories(30);
        setTotalProducts(24);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gray-100">
        <main className="p-6 w-full max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-600">Total Vendors</h2>
                <p className="text-2xl font-bold">{loading ? "..." : totalVendors}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-600">Total Categories</h2>
                <p className="text-2xl font-bold">{loading ? "..." : totalCategories}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-600">Total Products</h2>
                <p className="text-2xl font-bold">{loading ? "..." : totalProducts}</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
