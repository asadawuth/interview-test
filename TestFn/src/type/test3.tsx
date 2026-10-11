export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  tel: string;
  type: string;
}

export interface CreateEmployee {
  first_name: string;
  last_name: string;
  age: number;
  tel: string;
  type: string;
}

export interface EditEmployee {
  first_name?: string;
  last_name?: string;
  age?: number;
  tel?: string;
  type?: string;
}
