import api from "./api";
import type { SalesOrderList } from "../type/test1";

export const getSalesOrderList = async (): Promise<SalesOrderList[]> => {
  const response = await api.get<SalesOrderList[]>("order/listOrderCustom");
  return response.data;
};
