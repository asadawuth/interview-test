// import { Injectable, OnModuleDestroy } from '@nestjs/common';
// import { Pool, QueryResultRow } from 'pg';

// @Injectable()
// export class DatabaseService implements OnModuleDestroy {
//   private readonly pool: Pool;

//   constructor() {
//     this.pool = new Pool({
//       connectionString: process.env.DATABASE_URL,
//     });
//   }

//   async query<T extends QueryResultRow = QueryResultRow>(
//     text: string,
//     params?: unknown[],
//   ): Promise<T[]> {
//     const result = await this.pool.query<T>(text, params);
//     return result.rows;
//   }

//   async onModuleDestroy() {
//     await this.pool.end();
//   }
// }
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Pool, QueryResultRow } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  private readonly pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }

  async query<T extends QueryResultRow = QueryResultRow>(
    text: string,
    params?: unknown[],
  ): Promise<T[]> {
    const result = await this.pool.query<T>(text, params);
    return result.rows;
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
