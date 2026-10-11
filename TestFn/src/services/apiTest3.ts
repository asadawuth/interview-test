import api from "./api";
import type { Employee, CreateEmployee, EditEmployee } from "../type/test3";

export const getEmployees = () => {
  return api.get<Employee[]>("/employee");
};

export const createEmployee = (data: CreateEmployee) => {
  return api.post("/employee", data);
};

export const editEmployee = (id: number, data: EditEmployee) => {
  return api.patch(`/employee/${id}`, data);
};

export const deleteEmployee = (id: number) => {
  return api.delete(`/employee/${id}`);
};
