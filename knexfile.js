// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/quizzer_testdb.db3'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/seeds/'
    },
    migrations: {
      directory: './data/migrations'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
<<<<<<< HEAD
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}
=======
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true
  }
}
>>>>>>> c48dc1afb89f4057c1251e5f0b32cc34a53878f7
