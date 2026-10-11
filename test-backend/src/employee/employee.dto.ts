import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  Length,
  IsIn,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsInt()
  @Min(18)
  @Max(100)
  age: number;

  @IsString()
  @Length(10, 10)
  tel: string;

  @IsString()
  @IsIn(['เซลล์', 'ผู้จัดการเซลล์'])
  type: string;
}

export class EditEmployeeDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsInt()
  @Min(18)
  @Max(100)
  age: number;

  @IsString()
  @Length(10, 10)
  tel: string;

  @IsString()
  @IsIn(['เซลล์', 'ผู้จัดการเซลล์'])
  type: string;
}
