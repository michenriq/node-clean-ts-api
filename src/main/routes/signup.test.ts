import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'michel henrique',
        email: 'mic-andrade@hotmail.com',
        password: '102030',
        passwordConfirmation: '102030'
      })
      .expect(200)
  })
})
