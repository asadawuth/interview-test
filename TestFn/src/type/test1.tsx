export interface SalesOrderList {
  customer_name: string;
  product_name: string;
  total_qty: number;
  price: string;
  total_price: string;
  status: "APPROVED" | "PENDING_APPROVAL";
}
