const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

let usersCollection;

async function connectDB() {
  await client.connect();
  const db = client.db('linas');
  usersCollection = db.collection('users');
  console.log('Connected to MongoDB');
}

function getUsersCollection() {
  return usersCollection;
}

module.exports = { connectDB, getUsersCollection };