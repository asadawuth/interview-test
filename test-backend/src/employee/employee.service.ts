import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateEmployeeDto, EditEmployeeDto } from './employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getEmployees() {
    return this.databaseService.query('SELECT * FROM employee');
  }

  async createEmployee(data: CreateEmployeeDto) {
    await this.databaseService.query(
      `
    INSERT INTO employee
      (first_name, last_name, age, tel, type)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING id
    `,
      [data.first_name, data.last_name, data.age, data.tel, data.type],
    );

    return {
      message: 'Created Id Employee Success',
    };
  }

  async editdataEmployee(id: number, data: EditEmployeeDto) {
    const result = await this.databaseService.query(
      `UPDATE employee
     SET first_name = $1,
         last_name = $2,
         age = $3,
         tel = $4,
         type = $5
     WHERE id = $6`,
      [data.first_name, data.last_name, data.age, data.tel, data.type, id],
    );

    if (result.length === 0) {
      return {
        message: `Employee ID ${id} not found`,
      };
    }

    return {
      message: `Edit Employee ID ${id} Success`,
    };
  }

  async deleteEmployee(id: number) {
    await this.databaseService.query('DELETE FROM employee WHERE id = $1', [
      id,
    ]);
    return {
      message: 'Deleted Id Employee Success',
    };
  }
}
