// Update with your config settings.
require("dotenv").config();
const pg = require("pg");
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/quizzer.db3"
    },
    seeds: {
      directory: "./data/seeds/"
    },
    migrations: {
      tableName: "dbmigrations",
      directory: "./data/migrations"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/testDB.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}`,
    ssl: true,
    migrations: {
      tableName: "dbmigrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true
  }
};
