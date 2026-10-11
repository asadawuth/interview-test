import { deleteEmployee } from "../services/apiTest3";
import type { Employee } from "../type/test3";

interface DeleteEmployeeProps {
  employee: Employee;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DeleteEmployee({
  employee,
  onClose,
  onSuccess,
}: DeleteEmployeeProps) {
  const handleDelete = async () => {
    try {
      const response = await deleteEmployee(employee.id);
      console.log("Delete Employee:", response.data);
      onSuccess();
    } catch (error) {
      console.error("Delete Employee Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">ลบพนักงาน</h2>

            <p className="mt-1 text-sm text-gray-500">
              ยืนยันการลบข้อมูลพนักงาน
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <p className="text-sm text-gray-600">
            คุณต้องการลบพนักงานคนนี้หรือไม่?
          </p>

          <div className="mt-4 rounded-lg bg-gray-50 p-4">
            <div className="text-sm text-gray-500">ID: #{employee.id}</div>

            <div className="mt-1 font-medium text-gray-800">
              {employee.first_name} {employee.last_name}
            </div>

            <div className="mt-1 text-sm text-gray-500">
              ตำแหน่ง: {employee.type}
            </div>
          </div>

          <p className="mt-4 text-xs text-red-500">
            ⚠️ เมื่อลบแล้วจะไม่สามารถกู้คืนข้อมูลได้
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t bg-gray-50 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            ยกเลิก
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="cursor-pointer rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-95"
          >
            ยืนยันลบ
          </button>
        </div>
      </div>
    </div>
  );
}
