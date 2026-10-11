import { useState, useEffect } from "react";
import type { SalesOrderList } from "../type/test1";
import { getSalesOrderList } from "../services/aptTest1";

export default function test1() {
  const [salesOrderList, setSalesOrderList] = useState<SalesOrderList[]>([]);
  useEffect(() => {
    const fetchSalesOrderList = async () => {
      try {
        const data = await getSalesOrderList();
        setSalesOrderList(data);
      } catch (error) {
        console.error("ไม่สามารถโหลดรายการยอดขายได้", error);
      }
    };
    fetchSalesOrderList();
  }, []);

  return (
    <>
      <div className="mt-6 pl-1 flex items-center justify-between gap-2">
        <a
          href="https://dbdiagram.io/d/Test-6a9fe2b4ff72c756bc084192"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
        >
          {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h4.5l1.5 2.25h10.5v8.25a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5V6.75z"
              />
            </svg>
          </div>

          {/* Text */}
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-800">
              Database Flowchart ข้อ 1.1
            </p>
            <p className="text-xs text-gray-500">ดูโครงสร้าง Database</p>
          </div>

          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="ml-2 h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6.75L19.5 12l-6 5.25M19.5 12H4.5"
            />
          </svg>
        </a>
        <a
          href="http://localhost:5173/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md mr-4"
        >
          กลับไปหน้าแรก
        </a>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 mx-2 mt-6">
        <div className="flex items-start gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            1.2
          </span>

          <div className="space-y-2">
            <p className="font-medium leading-7 text-slate-800">
              พนักงานขายจะได้รับใบสั่งซื้อจากลูกค้าและบันทึกลงในระบบ
              โดยมีข้อมูลดังนี้
            </p>

            <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
              <span className="text-sm font-medium text-amber-700">
                เงื่อนไขการอนุมัติ
              </span>

              <span className="text-sm text-slate-600">
                หากยอดสั่งซื้อเกิน
                <strong className="mx-1 text-amber-700">10,000 บาท</strong>
                จะต้องได้รับการอนุมัติจากผู้จัดการก่อน
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm mb-4">
        {/* Header */}
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
              1.2
            </span>
            <div>
              <h3 className="font-semibold text-slate-800">รายการยอดขาย</h3>
              <p className="text-sm text-slate-500">
                แสดงรายการสั่งซื้อสินค้าและสถานะการอนุมัติ
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr className="border-b border-slate-200">
                <th className="px-5 py-3 text-left font-semibold">ลูกค้า</th>
                <th className="px-5 py-3 text-left font-semibold">สินค้า</th>
                <th className="px-5 py-3 text-right font-semibold">จำนวน</th>
                <th className="px-5 py-3 text-right font-semibold">ราคา</th>
                <th className="px-5 py-3 text-right font-semibold">ยอดรวม</th>
                <th className="px-5 py-3 text-center font-semibold">สถานะ</th>
              </tr>
            </thead>

            <tbody>
              {salesOrderList.length > 0 ? (
                salesOrderList.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 text-slate-700">
                      {item.customer_name}
                    </td>

                    <td className="px-5 py-4 text-slate-700">
                      {item.product_name}
                    </td>

                    <td className="px-5 py-4 text-right text-slate-700">
                      {item.total_qty}
                    </td>

                    <td className="px-5 py-4 text-right text-slate-700">
                      {Number(item.price).toLocaleString("th-TH", {
                        minimumFractionDigits: 2,
                      })}{" "}
                      บาท
                    </td>

                    <td className="px-5 py-4 text-right font-medium text-slate-800">
                      {Number(item.total_price).toLocaleString("th-TH", {
                        minimumFractionDigits: 2,
                      })}{" "}
                      บาท
                    </td>

                    <td className="px-5 py-4 text-center">
                      {item.status === "APPROVED" ? (
                        <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                          อนุมัติแล้ว
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                          รออนุมัติ
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-10 text-center text-slate-400"
                  >
                    ไม่พบรายการยอดขาย
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
