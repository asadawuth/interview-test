import { useEffect, useState } from "react";
import type { getBangkokMetropolitanRegion } from "../../type/test2";
import { BangkokMetropolitanRegion } from "../../services/apiTest2";

export default function Test2_1() {
  const [customers, setCustomers] = useState<getBangkokMetropolitanRegion[]>(
    [],
  );

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await BangkokMetropolitanRegion();
        setCustomers(response.data);
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูลลูกค้า:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-bold">
        ลูกค้าในเขตกรุงเทพมหานครและปริมณฑล
      </h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border px-4 py-3">รหัสลูกค้า</th>
              <th className="border px-4 py-3">ชื่อลูกค้า</th>
              <th className="border px-4 py-3">ที่อยู่</th>
              <th className="border px-4 py-3">รหัสไปรษณีย์</th>
              <th className="border px-4 py-3">ผู้ติดต่อ</th>
            </tr>
          </thead>

          <tbody>
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="border px-4 py-3 text-center">
                    {customer.customer_code}
                  </td>

                  <td className="border px-4 py-3">{customer.customer_name}</td>

                  <td className="border px-4 py-3">
                    {customer.customer_address}
                  </td>

                  <td className="border px-4 py-3 text-center">
                    {customer.customer_postcode}
                  </td>

                  <td className="border px-4 py-3">{customer.contactperson}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="border px-4 py-10 text-center text-slate-400"
                >
                  ไม่พบข้อมูลลูกค้า
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
