import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

config({ path: '../../.env' });

const MONGODB_URI = process.env.MONGODB_URI;

const client = new MongoClient(MONGODB_URI);

export default client;
