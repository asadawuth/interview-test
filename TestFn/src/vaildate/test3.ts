import { z } from "zod";

export const employeeSchema = z.object({
  first_name: z.string().trim().min(1, "กรุณากรอกชื่อ"),

  last_name: z.string().trim().min(1, "กรุณากรอกนามสกุล"),

  age: z.number().min(1, "กรุณากรอกอายุ").max(100, "อายุไม่ถูกต้อง"),

  tel: z
    .string()
    .trim()
    .min(1, "กรุณากรอกเบอร์โทร")
    .regex(/^[0-9]{9,10}$/, "เบอร์โทรไม่ถูกต้อง"),

  type: z.string().min(1, "กรุณาเลือกตำแหน่ง"),
});

export type EmployeeFormData = z.infer<typeof employeeSchema>;

export const editEmployeeSchema = z.object({
  first_name: z.string().trim().min(1, "กรุณากรอกชื่อ"),

  last_name: z.string().trim().min(1, "กรุณากรอกนามสกุล"),

  age: z.number().min(1, "กรุณากรอกอายุ").max(100, "อายุไม่ถูกต้อง"),

  tel: z
    .string()
    .trim()
    .min(1, "กรุณากรอกเบอร์โทร")
    .regex(/^[0-9]{9,10}$/, "เบอร์โทรไม่ถูกต้อง"),

  type: z.string().min(1, "กรุณาเลือกตำแหน่ง"),
});

export type EditEmployeeFormData = z.infer<typeof editEmployeeSchema>;
