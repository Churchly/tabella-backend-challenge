import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Email, Submission } from '../database/entities'

export const AppDataSource = new DataSource({
  type: 'mongodb',
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Email, Submission],
  migrations: ['../migrations/**/*.ts'],
  subscribers: [],
});
