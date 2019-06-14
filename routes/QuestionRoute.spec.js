const request = require('supertest');
const server = require('../api/server.js');

describe('QuestionRoute.js', () => {
    describe('GET /', () => {
    it('{ -- GET /api/quest/; Expectation: "Quizzer: Question Route API is running" }', () => {
        return request(server)
          .get('/api/quest')
          .then(res => {
            expect(res.body).toEqual('Quizzer: Question Route API is running');
          }); 
      }); 
    });
    describe('GET /api/quest', () => {
        it('{ -- GET /api/quest/question; Expectation: "List of questions" }', async () => {
            const response = await request(server).get('/api/quest/question');
            expect(response.status).toBe(200); 
          });
        });
    describe('GET /api/quest', () => {
        it('{ -- GET api/quest/question/:id; Expectation: "Should GET A question by provided ID" }', async () => {
            const response = await request(server).get('/api/quest/question/1');
            expect(response.status).toBe(200); 
            });
        });
    describe('POST /api/quest', () => {
        it('{ -- POST api/quest/question; Expectation: "Should POST a new question}', async () => {
            const entry = {
                category: "Test",
                type: 1,
                Q_content: "What is the square route of 256?",
                A: "12",
                B: "16",
                C: "14",
                D: "15",
                correct_answer: "test",
                points: 2,
                quiz_id: 1
            }
            const response = await request(server).post('/api/quest/question').send(entry)
    
            expect(response.status).toBe(200)
        })
    })
    describe('PUT /api/quest', () => {
        it('{ -- PUT api/quest/question/:id; Expectation: "Should UPDATE a question by ID}', async () => {
            const entry = {
                category: "Test_Update",
                type: 1,
                Q_content: "What is the square route of 256?",
                A: "12",
                B: "16",
                C: "14",
                D: "15",
                correct_answer: "test_update",
                points: 2,
                quiz_id: 1 
            }
            const response = await request(server).put('/api/quest/question/26').send(entry)
    
            expect(response.status).toBe(200)
        })
    })
    describe('DELETE /api/quest', () => {
        it('{ -- PUT api/quest/question/:id; Expectation: "Should DELETE a question by ID}', async () => {
            const response = await request(server).delete('/api/quest/question/26')
    
            expect(response.status).toBe(200)
        })
    })                    
});
