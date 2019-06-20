const request = require('supertest');
const server = require('../api/server.js');

describe('UserRoute.js', () => {
    describe('GET api/users', () => {
        it('{ -- GET /api/users; Expectation: "List of users" }', async () => {
            const response = await request(server).get('/api/users');
            expect(response.status).toBe(200); 
          });
        });
    describe('GET /api/users', () => {
        it('{ -- GET api/users/:id; Expectation: "Should GET A user by provided ID" }', async () => {
            const response = await request(server).get('/api/users/1');
            expect(response.status).toBe(200); 
            });
        });
    describe('POST /api/user', () => {
        it('{ -- POST api/users; Expectation: "Should POST a new user}', async () => {
            const entry = {
                "name": "Testname",
                "username": "Test_Name",
                "email": "testname@gmail.com"
            }
            const response = await request(server).post('/api/users').send(entry)
    
            expect(response.status).toBe(200)
        })
    })
    describe('PUT /api/quiz', () => {
        it('{ -- PUT api/users/:id; Expectation: "Should UPDATE a user by ID}', async () => {
            const entry = {
                "name": "Testname11",
                "username": "Test_Name11",
                "email": "testname11@gmail.com"
            }
            const response = await request(server).put('/api/users/6').send(entry)
    
            expect(response.status).toBe(200)
        })
    })
    describe('DELETE /api/user', () => {
        it('{ -- PUT api/user/:id; Expectation: "Should DELETE a quiz by ID}', async () => {
            const response = await request(server).delete('/api/users/6')
    
            expect(response.status).toBe(200)
        })
    })                    
});
