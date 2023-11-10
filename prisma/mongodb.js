import { MongoClient } from 'mongodb';

const url = process.env.DATABASE_URL || '';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

export default client;