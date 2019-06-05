const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('Should respond with 200 OK', async () => {
            const response = await request(server).get('/');
            expect(response.status).toBe(200);  
        })
    })
    it('should return { "message": "Quizzer API is running" }', () => {
        return request(server)
          .get('/')
          .then(res => {
            expect(res.body).toEqual({ message: "Quizzer API is running" });
          }); 
      }); 
    })
