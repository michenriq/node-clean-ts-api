import request from 'supertest'
import app from '../config/app'

describe('CORS Middlewares', () => {
  test('Should parse body as json', async () => {
    app.post('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-headers', '*')
      .expect('access-control-methods', '*')
  })
})
