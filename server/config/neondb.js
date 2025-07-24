import {neon} from '@neondatabase/serverless';

  
const sql = neon(`${process.env.DATABASE_URL}`);

sql`SELECT NOW()`
  .then((result) => {
    console.log('Success: Neon DB Connected');
  })
  .catch((err) => {
    console.error('Neon DB Error:', err);
  });

export default sql;