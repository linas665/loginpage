const { ObjectId } = require('mongodb');
const { getUsersCollection } = require('../config/db');

const User = {
  findByEmail: async (email) => {
    const users = getUsersCollection();
    return await users.findOne({ email });
  },
  insert: async (data) => {
    const users = getUsersCollection();
    return await users.insertOne(data);
  },
  findAllUsers: async () => {
    const users = getUsersCollection();
    return await users.find({ role: 'user' }).toArray();
  },
  updateStatus: async (id, status) => {
    const users = getUsersCollection();
    return await users.updateOne({ _id: new ObjectId(id) }, { $set: { status } });
  }
};

module.exports = User;
