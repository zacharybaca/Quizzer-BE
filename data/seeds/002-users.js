require('dotenv').config();
const knex = require('knex');
const db = require('../dbConfig.js');
const faker = require('faker');

const createFakeUser = () => ({
  id: i,
  name:faker.name.firstName(), 
  username:faker.internet.userName(), 
  email:faker.internet.email()
});

exports.seed = async function(knex, Promise) {
      // Insert Users
      const fakeUsers = [];
      const desiredFakeUsers = process.env.USER_COUNT;
      
       knex('users')
      .truncate().then( function(){
        for (let i = 1; i < desiredFakeUsers; i++) {
          fakeUsers.push(createFakeUser());
        }
        return db('users')
        .insert(fakeUsers)
      }) 
};
