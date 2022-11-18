import { Chat } from 'src/chat/chat.entity';
import { DataSource } from 'typeorm';
import { CreateChat1668726313561 } from '../migrations/1668726313561-CreateChat';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'chat',
  entities: [Chat],
  migrations: [CreateChat1668726313561],
});
