module.exports = {
  development: {
    client: 'pg',
    connection: 'postgress://localhost/epicland_dev',
  },

  test: {
    client: 'pg',
    connection: 'postgress://localhost/epicland_test',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
