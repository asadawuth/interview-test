import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto, EditEmployeeDto } from './employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getEmployees() {
    return this.employeeService.getEmployees();
  }

  @Post()
  async createEmployee(@Body() data: CreateEmployeeDto) {
    return this.employeeService.createEmployee(data);
  }

  @Patch(':id')
  async editdataEmployee(
    @Param('id') id: number,
    @Body() data: EditEmployeeDto,
  ) {
    return this.employeeService.editdataEmployee(id, data);
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: number) {
    return this.employeeService.deleteEmployee(id);
  }
}
