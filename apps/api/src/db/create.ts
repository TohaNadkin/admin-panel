import type { DataSourceOptions } from "typeorm";
import type { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions.js";
import { DataSource } from "typeorm";

import { Message } from "./entities/Message.js";
import { User } from "./entities/User.js";

const defaultDatabaseConfig = {
  type: "mongodb",
  database: "RuleGuideBot",
  host: "localhost",
  port: 27017,
  synchronize: true,
  logging: false,
  entities: ["./entities/**/*.ts"],
  migrations: [],
  subscribers: [],
} satisfies Partial<DataSourceOptions>;

export const createDatabaseConnection = async (
  options: Partial<MongoConnectionOptions>,
) => {
  const sourceOptions = {
    ...options,
    ...defaultDatabaseConfig,
  };

  const AppDataSource = new DataSource(sourceOptions);
  const initAppDataASource = AppDataSource.initialize();

  return await initAppDataASource;
};

export const Entities = {
  Message: Message,
  User: User,
};
