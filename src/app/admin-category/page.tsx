import { Card, CardContent } from "@/components/ui/card";
import AdminLayout from "@/components/AdminLayout";

const categoryData = [
  { name: "Electronics", shopCount: 12 },
  { name: "Clothing", shopCount: 8 },
  { name: "Home & Kitchen", shopCount: 5 },
  { name: "Books", shopCount: 7 },
  { name: "Electronics", shopCount: 12 },
  { name: "Clothing", shopCount: 8 },
  { name: "Home & Kitchen", shopCount: 5 },
  { name: "Books", shopCount: 7 },
 
];

export default function CategoriesPage() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-teal-dark mb-5 mt-0">Categories</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-bold text-teal-dark">Category</th>
              <th className="px-6 py-3 text-left font-bold text-teal-dark">Number of Shops</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {categoryData.map((category) => (
              <tr key={category.name}>
                <td className="px-6 py-4">{category.name}</td>
                <td className="px-6 py-4">{category.shopCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
