import api from "./api";
import type {
  getBangkokMetropolitanRegion,
  getCustomersIdAllListOrder,
  ProductLessThan100,
} from "../type/test2";

export const BangkokMetropolitanRegion = () => {
  return api.get<getBangkokMetropolitanRegion[]>(
    "order/getBangkokMetropolitanRegion",
  );
};

export const CustomersIdAllListOrder = (
  customerCode: string,
  customerName: string,
) => {
  return api.get<getCustomersIdAllListOrder[]>(
    "order/customersIdButProductList",
    {
      params: {
        customerCode,
        customerName,
      },
    },
  );
};

export const LessThan100 = () => {
  return api.get<ProductLessThan100[]>("order/getlowStockProducts");
};
