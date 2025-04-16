"use client";

import { Card } from "@/components/ui/card";
import AdminLayout from "@/components/AdminLayout";

export default function ShopsPage() {
  const shops = [
    { name: "Tech Mart", category: "Electronics", owner: "Ravi Kumar", startDate: "2023-01-15" },
    { name: "Style Hub", category: "Fashion", owner: "Anjali Mehta", startDate: "2022-08-10" },
    { name: "GreenGrocers", category: "Groceries", owner: "Rajesh Sharma", startDate: "2024-02-05" },
    { name: "Tech Mart", category: "Electronics", owner: "Ravi Kumar", startDate: "2023-01-15" },
    { name: "Style Hub", category: "Fashion", owner: "Anjali Mehta", startDate: "2022-08-10" },
    { name: "GreenGrocers", category: "Groceries", owner: "Rajesh Sharma", startDate: "2024-02-05" },
    { name: "Tech Mart", category: "Electronics", owner: "Ravi Kumar", startDate: "2023-01-15" },
    { name: "Style Hub", category: "Fashion", owner: "Anjali Mehta", startDate: "2022-08-10" },
  { name: "GreenGrocers", category: "Groceries", owner: "Rajesh Sharma", startDate: "2024-02-05" }
  ];

  return (
     <AdminLayout>
    <div className="p-0">
      <h1 className="text-2xl font-bold text-teal-dark mb-6">Shops</h1>
      <Card className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className=" font-bold text-teal-dark p-4">Shop Name</th>
              <th className=" font-bold text-teal-dark p-4">Category</th>
              <th className=" font-bold text-teal-dark p-4">Owner</th>
              <th className=" font-bold text-teal-dark p-4">Start Date</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{shop.name}</td>
                <td className="p-4">{shop.category}</td>
                <td className="p-4">{shop.owner}</td>
                <td className="p-4">{shop.startDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
       </AdminLayout>
  );
}
