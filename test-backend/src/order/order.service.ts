import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class OrderService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getBangkokMetropolitanRegion() {
    const result = await this.databaseService.query(`
          SELECT *
    FROM customer AS csm
    WHERE csm.customer_postcode LIKE '1%'
      AND (
        csm.customer_address LIKE '%กรุงเทพมหานคร%'
        OR csm.customer_address LIKE '%กรุงเทพ%'
        OR csm.customer_address LIKE '%นนทบุรี%'
        OR csm.customer_address LIKE '%สมุทรปราการ%'
        OR csm.customer_address LIKE '%ปทุมธานี%'
        OR csm.customer_address LIKE '%นครปฐม%'
      )`);

    return result;
  }

  async getCustomersIdAllList(customerCode?: string, customerName?: string) {
    const code = customerCode?.trim() || null;
    const name = customerName?.trim() || null;

    const result = await this.databaseService.query(
      `
    SELECT 
        so.ordernumber AS order_number,
        ctm.customer_name AS customer_name,
        pd.product_name AS product_name,
        so.salesqty AS quantity,
        pd.unitprice AS unit_price,
        so.salesqty * pd.unitprice AS total,
        so.status AS status
    FROM public.salesorder AS so
    LEFT JOIN public.customer AS ctm
        ON so.customer_code = ctm.customer_code
    LEFT JOIN public.product AS pd 
        ON pd.product_code = so.product_code
    WHERE
        ($1::text IS NOT NULL AND ctm.customer_code = $1)
        OR
        ($2::text IS NOT NULL AND ctm.customer_name ILIKE '%' || $2 || '%')
    ORDER BY total DESC;
    `,
      [code, name],
    );

    if (result.length === 0) {
      throw new NotFoundException('ไม่พบข้อมูลลูกค้า');
    }

    return result;
  }

  async getlowStockProducts() {
    const result = await this.databaseService.query(
      `SELECT
      p.product_code AS "product_code",
      p.product_name AS "product_name",
      p.stock_qty AS "total_stock",
      COALESCE(SUM(so.salesqty), 0) AS "total_sold",
      p.stock_qty - COALESCE(SUM(so.salesqty), 0) AS "remaining_stock",
      COUNT(so.product_code) AS "order_count",
      p.unit AS "unit"
      FROM public.product AS p
LEFT JOIN public.salesorder AS so
    ON p.product_code = so.product_code
    AND so.status = 'APPROVED'
GROUP BY p.product_code, p.stock_qty , p.product_name , p.unit
HAVING p.stock_qty - COALESCE(SUM(so.salesqty), 0) < 100;
    `,
    );
    return result;
  }

  async listOrderCustom() {
    const result = await this.databaseService.query(`
    SELECT 
      csm.contactperson AS "customer_name",
      pd.product_name AS "product_name",
      so.salesqty AS "total_qty",
      pd.unitprice AS "price",
      so.salesqty * pd.unitprice AS "total_price",
      so.status AS "status"
    FROM public.salesorder AS so
    LEFT JOIN product AS pd
      ON so.product_code = pd.product_code
    LEFT JOIN customer AS csm
      ON so.customer_code = csm.customer_code
  `);
    return result;
  }
}
