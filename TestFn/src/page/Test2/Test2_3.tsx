import { useEffect, useState } from "react";
import type { ProductLessThan100 } from "../../type/test2";
import { LessThan100 } from "../../services/apiTest2";

export default function Test2_3() {
  const [productLessThan100, setProductLessThan100] = useState<
    ProductLessThan100[]
  >([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await LessThan100();

        setProductLessThan100(response.data);
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-bold">สินค้าที่มีสต๊อกน้อยกว่า 100</h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border px-4 py-3">รหัสสินค้า</th>
              <th className="border px-4 py-3">ชื่อสินค้า</th>
              <th className="border px-4 py-3">สต๊อกทั้งหมด</th>
              <th className="border px-4 py-3">ขายไปแล้ว</th>
              <th className="border px-4 py-3">สต๊อกคงเหลือ</th>
              <th className="border px-4 py-3">จำนวน Order</th>
              <th className="border px-4 py-3">หน่วย</th>
            </tr>
          </thead>

          <tbody>
            {productLessThan100.length > 0 ? (
              productLessThan100.map((product) => (
                <tr key={product.product_code}>
                  <td className="border px-4 py-3 text-center">
                    {product.product_code}
                  </td>

                  <td className="border px-4 py-3">{product.product_name}</td>

                  <td className="border px-4 py-3 text-center">
                    {product.total_stock}
                  </td>

                  <td className="border px-4 py-3 text-center">
                    {product.total_sold}
                  </td>

                  <td className="border px-4 py-3 text-center">
                    {product.remaining_stock}
                  </td>

                  <td className="border px-4 py-3 text-center">
                    {product.order_count}
                  </td>

                  <td className="border px-4 py-3 text-center">
                    {product.unit}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="border px-4 py-10 text-center text-slate-400"
                >
                  ไม่พบสินค้าที่มีสต๊อกน้อยกว่า 100
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
