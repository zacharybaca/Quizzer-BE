const request = require('supertest');
const server = require('../api/server.js');

describe('ProfileRoute.js', () => {
    describe('GET /', () => {
    it('{ -- GET /api/profile/; Expectation: "Profile Route API is running" }', () => {
        return request(server)
          .get('/api/profile')
          .then(res => {
            expect(res.body).toEqual({ message: 'Quizzer: Profile Route API is running' });
          }); 
      });
    });
    describe('GET /teacher', () => {
        it('{ -- GET /api/profile/teacher; Expectation: "List of teachers" }', async () => {
            const response = await request(server).get('/api/profile/teacher');
            expect(response.status).toBe(200); 
          });
        });
    describe('GET /teacher', () => {
        it('{ -- GET api/profile/teacher/:id; Expectation: "A teacher by provided ID" }', async () => {
            const response = await request(server).get('/api/profile/teacher/:id');
            expect(response.status).toBe(200); 
            });
        });
    describe('POST /teacher', () => {
        it('{ -- POST api/profile/teacher; Expectation: "Should POST a new teacher}', async () => {
            const entry = {
                 name: "Test2",
                 username: "Test2",
                 email: "Test2@gmail.com",
                 role: "Teacher2",
                 student_id: "7" 
            }
            const response = await request(server).post('/api/profile/teacher').send(entry)
    
            expect(response.status).toBe(200)
        })
    })
    describe('POST /teacher', () => {
        it('{ -- PUT api/profile/teacher/:id; Expectation: "Should UPDATE a teacher by ID}', async () => {
            const entry = {
                 name: "Test7",
                 username: "Test2",
                 email: "Test2@gmail.com",
                 role: "Teacher2",
                 student_id: "7" 
            }
            const response = await request(server).put('/api/profile/teacher/7').send(entry)
    
            expect(response.status).toBe(200)
        })
    })
    describe('DELETE /teacher', () => {
        it('{ -- PUT api/profile/teacher/:id; Expectation: "Should DELETE a teacher by ID}', async () => {
            const response = await request(server).delete('/api/profile/teacher/:8')
    
            expect(response.status).toBe(200)
        })
    })                    
});
