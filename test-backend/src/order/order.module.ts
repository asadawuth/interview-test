import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
