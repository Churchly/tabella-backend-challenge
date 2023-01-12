// import { MongoClient } from 'mongodb';
// import { config } from 'dotenv';

// config();

// const MONGODB_URI = process.env.MONGODB_URI;

// const client = new MongoClient(MONGODB_URI);
// const dbName = 'churchly';

// async function main() {
//   await client.connect();
//   console.log('Connected successfully to server');

//   const db = client.db(dbName);
//   const collection = db.collection('emails');

//   const result = await collection.insertOne({ test: 'test' });

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());
