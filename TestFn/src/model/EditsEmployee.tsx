import { useFormik, type FormikErrors } from "formik";
import { editEmployee } from "../services/apiTest3";
import type { Employee } from "../type/test3";
import {
  editEmployeeSchema,
  type EditEmployeeFormData,
} from "../vaildate/test3";
import Input from "../conponent/Input";
import TextError from "../conponent/TextError";

interface EditsEmployeeProps {
  employee: Employee;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EditsEmployee({
  employee,
  onClose,
  onSuccess,
}: EditsEmployeeProps) {
  const formik = useFormik<EditEmployeeFormData>({
    initialValues: {
      first_name: employee.first_name,
      last_name: employee.last_name,
      age: employee.age,
      tel: employee.tel,
      type: employee.type,
    },

    validate: (values) => {
      const result = editEmployeeSchema.safeParse(values);

      if (result.success) {
        return {};
      }

      const errors: FormikErrors<EditEmployeeFormData> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof EditEmployeeFormData;

        if (!errors[field]) {
          errors[field] = issue.message;
        }
      });

      return errors;
    },

    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await editEmployee(employee.id, values);

        console.log("Edit Employee:", response.data);

        onSuccess();
      } catch (error) {
        console.error("Edit Employee Error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              แก้ไขพนักงาน
            </h2>

            <p className="mt-1 text-sm text-gray-500">แก้ไขข้อมูลพนักงาน</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-4 px-6 py-5">
            {/* ชื่อ */}
            <Input
              label="ชื่อ"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              placeholder="กรอกชื่อ"
              error={
                formik.submitCount > 0 ? formik.errors.first_name : undefined
              }
            />

            {/* นามสกุล */}
            <Input
              label="นามสกุล"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              placeholder="กรอกนามสกุล"
              error={
                formik.submitCount > 0 ? formik.errors.last_name : undefined
              }
            />

            {/* อายุ + เบอร์โทร */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* อายุ */}
              <Input
                label="อายุ"
                name="age"
                type="number"
                value={formik.values.age || ""}
                onChange={(e) => {
                  const value = e.target.value;

                  formik.setFieldValue("age", value === "" ? 0 : Number(value));
                }}
                placeholder="อายุ"
                error={formik.submitCount > 0 ? formik.errors.age : undefined}
              />

              {/* เบอร์โทร */}
              <Input
                label="เบอร์โทร"
                name="tel"
                type="tel"
                value={formik.values.tel}
                onChange={formik.handleChange}
                placeholder="เบอร์โทร"
                error={formik.submitCount > 0 ? formik.errors.tel : undefined}
              />
            </div>

            {/* ตำแหน่ง */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                ตำแหน่ง
              </label>

              <select
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
                className={`w-full cursor-pointer rounded-lg border bg-white px-3 py-2.5 text-sm outline-none transition focus:ring-2 ${
                  formik.submitCount > 0 && formik.errors.type
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
                }`}
              >
                <option value="">เลือกตำแหน่ง</option>
                <option value="เซลล์">เซลล์</option>
                <option value="ผู้จัดการเซลล์">ผู้จัดการเซลล์</option>
              </select>

              <TextError
                message={
                  formik.submitCount > 0 ? formik.errors.type : undefined
                }
              />
            </div>
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
              type="submit"
              disabled={formik.isSubmitting}
              className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {formik.isSubmitting ? "กำลังบันทึก..." : "บันทึกการแก้ไข"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
