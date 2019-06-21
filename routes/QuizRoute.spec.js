const request = require('supertest');
const server = require('../api/server.js');

describe('QuizRoute.js', () => {
    describe('GET api/quiz/quizzes', () => {
        it('{ -- GET /api/quiz/quizzes; Expectation: "List of quizzes" }', async () => {
            const response = await request(server).get('/api/quiz/quizzes');
            expect(response.status).toBe(200); 
          });
        });
    describe('GET /api/quiz', () => {
        it('{ -- GET api/quiz/quizzes/:id; Expectation: "Should GET A quiz by provided ID" }', async () => {
            const response = await request(server).get('/api/quiz/quizzes/1');
            expect(response.status).toBe(200); 
            });
        });
    describe('POST /api/quiz', () => {
        it('{ -- POST api/quiz/quizzes; Expectation: "Should POST a new quiz}', async () => {
            const entry = {
                class_average: 12,
                teacher_id: 2
            }
            const response = await request(server).post('/api/quiz/quizzes').send(entry)
    
            expect(response.status).toBe(200)
        })
    })
    describe('PUT /api/quiz', () => {
        it('{ -- PUT api/quiz/quizzes/:id; Expectation: "Should UPDATE a quiz by ID}', async () => {
            const entry = {
                class_average: 14,
                teacher_id: 15
            }
            const response = await request(server).put('/api/quiz/quizzes/2').send(entry)
    
            expect(response.status).toBe(200)
        }) 
    })
    describe('DELETE /api/quiz', () => {
        it('{ -- PUT api/quiz/quizzes/:id; Expectation: "Should DELETE a quiz by ID}', async () => {
            const response = await request(server).delete('/api/quiz/quizzes/2')
    
            expect(response.status).toBe(200)
        })
    })                    
});
