export interface getBangkokMetropolitanRegion {
  id: number;
  customer_code: string;
  customer_name: string;
  customer_address: string;
  customer_postcode: string;
  contactperson: string;
}

export interface getCustomersIdAllListOrder {
  order_number: number;
  customer_name: string;
  product_name: string;
  quantity: number;
  unit_price: string;
  total: string;
  status: "APPROVED" | "PENDING_APPROVAL";
}

export interface ProductLessThan100 {
  product_code: string;
  product_name: string;
  total_stock: number;
  total_sold: string;
  remaining_stock: string;
  order_count: string;
  unit: string;
}
