const { Pool } = require('pg');

const PG_URI =
  'postgres://evfaunlc:epW06BjkOMkMDpKUHIxDPcqCO6KDg-ls@stampy.db.elephantsql.com/evfaunlc';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
