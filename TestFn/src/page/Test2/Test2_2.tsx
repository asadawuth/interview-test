import { useState } from "react";

import type { getCustomersIdAllListOrder } from "../../type/test2";
import { CustomersIdAllListOrder } from "../../services/apiTest2";

export default function Test2_2() {
  const [customerCode, setCustomerCode] = useState("");
  const [customerName, setCustomerName] = useState("");

  const [customerIdDataOrderIdData, setCustomerIdDataOrOrderIdData] = useState<
    getCustomersIdAllListOrder[]
  >([]);

  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!customerCode.trim() && !customerName.trim()) {
      alert("กรุณากรอกรหัสลูกค้าหรือชื่อลูกค้า");
      return;
    }

    try {
      setLoading(true);

      const response = await CustomersIdAllListOrder(
        customerCode,
        customerName,
      );

      setCustomerIdDataOrOrderIdData(response.data);
    } catch (error) {
      console.error("Error fetching customer order:", error);

      setCustomerIdDataOrOrderIdData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-5 text-xl font-bold text-slate-800">
        ข้อ 2.2 รายการสั่งซื้อของลูกค้า
      </h2>

      {/* Search */}
      <div className="mb-6 rounded-lg border border-slate-200 bg-white p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Customer Code */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              รหัสลูกค้า
            </label>

            <input
              type="text"
              value={customerCode}
              onChange={(e) => setCustomerCode(e.target.value)}
              placeholder="เช่น 00001"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
            />
          </div>

          {/* Customer Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              ชื่อลูกค้า
            </label>

            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="เช่น บริษัท A จำกัด"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleSearch}
              disabled={loading}
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "กำลังค้นหา..." : "ค้นหา"}
            </button>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-5 py-3">เลขที่สั่งซื้อ</th>
              <th className="px-5 py-3">ชื่อลูกค้า</th>
              <th className="px-5 py-3">ชื่อสินค้า</th>
              <th className="px-5 py-3">จำนวน</th>
              <th className="px-5 py-3">ราคาต่อหน่วย</th>
              <th className="px-5 py-3">สุทธิ</th>
              <th className="px-5 py-3">สถานะ</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-5 py-10 text-center text-slate-400"
                >
                  กำลังค้นหา...
                </td>
              </tr>
            ) : customerIdDataOrderIdData.length > 0 ? (
              customerIdDataOrderIdData.map((item) => (
                <tr
                  key={item.order_number}
                  className="border-t border-slate-200 hover:bg-slate-50"
                >
                  <td className="px-5 py-3">{item.order_number}</td>

                  <td className="px-5 py-3">{item.customer_name}</td>

                  <td className="px-5 py-3">{item.product_name}</td>

                  <td className="px-5 py-3">
                    {Number(item.quantity).toLocaleString()}
                  </td>

                  <td className="px-5 py-3">
                    {Number(item.unit_price).toLocaleString()}
                  </td>

                  <td className="px-5 py-3">
                    {Number(item.total).toLocaleString()}
                  </td>

                  <td className="px-5 py-3">
                    {item.status === "APPROVED" ? "อนุมัติแล้ว" : "รออนุมัติ"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="px-5 py-10 text-center text-slate-400"
                >
                  ไม่พบรายการสั่งซื้อ
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
