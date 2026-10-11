import { useEffect, useState } from "react";
import type { Employee } from "../type/test3";
import EditsEmployee from "../model/EditsEmployee";
import DeleteEmployee from "../model/DeleteEmployee";
import CreateEmployee from "../model/CreateEmployee";
import { getEmployees } from "../services/apiTest3";

export default function Test3() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [openEditModal, setOpenEditModal] = useState<Employee | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState<Employee | null>(null);
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  useEffect(() => {
    getEmployees()
      .then((response) => {
        console.log("API Response:", response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleOpenEditModal = (employee: Employee) => {
    setOpenEditModal(employee);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(null);
  };

  const handleOpenDeleteModal = (employee: Employee) => {
    setOpenDeleteModal(employee);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(null);
  };

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleCreateSuccess = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
      setOpenCreateModal(false);
    } catch (error) {
      console.error("Refresh Employee Error:", error);
    }
  };

  const handleDeleteSuccess = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
      setOpenDeleteModal(null);
    } catch (error) {
      console.error("Refresh Employee Error:", error);
    }
  };

  const handleEditSuccess = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
      setOpenEditModal(null);
    } catch (error) {
      console.error("Refresh Employee Error:", error);
    }
  };

  return (
    <>
      {openEditModal && (
        <EditsEmployee
          employee={openEditModal}
          onClose={handleCloseEditModal}
          onSuccess={handleEditSuccess}
        />
      )}
      {openDeleteModal && (
        <DeleteEmployee
          employee={openDeleteModal}
          onClose={handleCloseDeleteModal}
          onSuccess={handleDeleteSuccess}
        />
      )}
      {openCreateModal && (
        <CreateEmployee
          onClose={handleCloseCreateModal}
          onSuccess={handleCreateSuccess}
        />
      )}
      <div className="w-full">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">พนักงาน</h2>
            <p className="mt-1 text-sm text-gray-500">จัดการข้อมูลพนักงาน</p>
          </div>
          <button
            onClick={handleOpenCreateModal}
            type="button"
            className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
          >
            <span className="text-lg leading-none">+</span>
            เพิ่มพนักงาน
          </button>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-200">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                  ID
                </th>
                <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                  ชื่อ
                </th>
                <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                  นามสกุล
                </th>
                <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                  อายุ
                </th>
                <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                  โทร
                </th>
                <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                  ตำแหน่ง
                </th>
                <th className="px-5 py-3 text-center text-sm font-semibold text-gray-600">
                  จัดการ
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b last:border-b-0 transition hover:bg-gray-50"
                >
                  <td className="px-5 py-4 text-sm text-gray-500">
                    #{employee.id}
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-gray-800">
                    {employee.first_name}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700">
                    {employee.last_name}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700">
                    {employee.age}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700">
                    {employee.tel}
                  </td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      {employee.type}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(employee)}
                        className=" cursor-pointer rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700 transition hover:bg-amber-100"
                      >
                        ✎ แก้ไข
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenDeleteModal(employee)}
                        className="cursor-pointer rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100"
                      >
                        ลบ
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
