import { Chat } from 'src/chat/chat.entity';
import { DataSource } from 'typeorm';
import { CreateChat1668726313561 } from '../migrations/1668726313561-CreateChat';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Chat],
  migrations: [CreateChat1668726313561],
});
