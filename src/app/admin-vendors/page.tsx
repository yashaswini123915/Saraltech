"use client";

import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface Vendor {
  id: number;
  name: string;
  requestDate: string;
  approved: boolean;
}

const initialVendors: Vendor[] = [
  { id: 1, name: "Ravi Kumar", requestDate: "2025-04-01", approved: false },
  { id: 2, name: "Anjali Sharma", requestDate: "2025-04-03", approved: false },
  { id: 3, name: "Rahul Verma", requestDate: "2025-04-05", approved: false },
  { id: 4, name: "Ravi Kumar", requestDate: "2025-04-01", approved: false },
  { id: 5, name: "Anjali Sharma", requestDate: "2025-04-03", approved: false },
  { id: 6, name: "Rahul Verma", requestDate: "2025-04-05", approved: false },
  { id: 7, name: "Ravi Kumar", requestDate: "2025-04-01", approved: false },
  { id: 8, name: "Anjali Sharma", requestDate: "2025-04-03", approved: false },
  { id: 9, name: "Rahul Verma", requestDate: "2025-04-05", approved: false },
];

export default function VendorsPage() {
  const [vendors, setVendors] = useState(initialVendors);

  const handleApprove = (id: number) => {
    setVendors((prev) =>
      prev.map((vendor) =>
        vendor.id === id ? { ...vendor, approved: true } : vendor
      )
    );
  };

  const handleDelete = (id: number) => {
    setVendors((prev) => prev.filter((vendor) => vendor.id !== id));
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-4">Vendors</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-gray-500 font-medium">Vendor Name</th>
              <th className="px-6 py-3 text-left text-gray-500 font-medium">Request Date</th>
              <th className="px-6 py-3 text-center text-gray-500 font-medium">Approve</th>
              <th className="px-6 py-3 text-center text-gray-500 font-medium">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {vendors.map((vendor) => (
              <tr key={vendor.id}>
                <td className="px-6 py-4">{vendor.name}</td>
                <td className="px-6 py-4">{vendor.requestDate}</td>
                <td className="px-6 py-4 text-center">
                  {vendor.approved ? (
                    <span className="text-green-600 font-medium">Approved</span>
                  ) : (
                    <Button
                      variant="outline"
                      className="text-green-600 border-green-600 hover:bg-green-50"
                      onClick={() => handleApprove(vendor.id)}
                    >
                      Approve
                    </Button>
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  <Button
                    variant="outline"
                    onClick={() => handleDelete(vendor.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
