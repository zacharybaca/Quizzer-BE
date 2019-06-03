require('dotenv').config();
const knex = require('knex');
const db = require('../dbConfig.js');
const faker = require('faker');

const createFakeUser = () => ({

  name:faker.name.firstName(), 
  username:faker.internet.userName(), 
  email:faker.internet.email(),
  role: "Paid User"
});

exports.seed = async function(knex, Promise) {
      // Insert Users
      const fakeUsers = [];
      const desiredFakeUsers = process.env.USER_COUNT || 50;
      console.log(desiredFakeUsers)
       return knex('users').truncate().then(function(){
        
        for (let i = 1; i < desiredFakeUsers; i++) {
          fakeUsers.push(createFakeUser());
          
        }
        
        return db('users')
        .insert(fakeUsers)
      }) 
};
