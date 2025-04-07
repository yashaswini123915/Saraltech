"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import AdminLayout from "@/components/AdminLayout";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [totalVendors, setTotalVendors] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalShops, setTotalShops] = useState(0);
  const [pendingVendors, setPendingVendors] = useState(8);
  const [approvedVendors, setApprovedVendors] = useState(17);

  const [categoryData, setCategoryData] = useState([
    { name: "Electronics", shops: 10 },
    { name: "Fashion", shops: 5 },
    { name: "Books", shops: 3 },
    { name: "Home", shops: 6 },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Simulated API calls
        setTotalVendors(25);
        setTotalCategories(30);
        setTotalShops(24);
        setPendingVendors(8);
        setApprovedVendors(17);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const pieData = [
    { name: "Pending", value: pendingVendors },
    { name: "Approved", value: approvedVendors },
  ];

  const COLORS = ["#FACC15", "#22C55E"];

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gray-100">
        <main className="p-6 w-full max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-teal-dark mb-6">Admin Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="shadow-lg border-l-4 border-teal">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-600">Total Vendors</h2>
                <p className="text-2xl font-bold text-teal-dark">{loading ? "..." : totalVendors}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-teal-light">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-600">Total Categories</h2>
                <p className="text-2xl font-bold text-teal-dark">{loading ? "..." : totalCategories}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-teal-dark">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold text-gray-600">Total shops</h2>
                <p className="text-2xl font-bold text-teal-dark">{loading ? "..." : totalShops}</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            {/* Pie Chart */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Vendor Approval Status</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Shops per Category</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="shops" fill="#14b8a6" name="Shops" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
