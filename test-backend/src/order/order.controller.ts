import { Controller, Get, Query } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('getBangkokMetropolitanRegion')
  async getBangkokMetropolitanRegion() {
    return this.orderService.getBangkokMetropolitanRegion();
  }

  @Get('customersIdButProductList')
  async getCustomersAllList(
    @Query('customerCode') customerCode?: string,
    @Query('customerName') customerName?: string,
  ) {
    return this.orderService.getCustomersIdAllList(customerCode, customerName);
  }

  @Get('getlowStockProducts')
  async getlowStockProducts() {
    return this.orderService.getlowStockProducts();
  }

  @Get('listOrderCustom')
  async listOrderCustom() {
    return this.orderService.listOrderCustom();
  }
}
