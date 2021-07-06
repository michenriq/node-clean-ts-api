import { Router } from 'express'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

export default (router: Router): void => {
  router.post('/signup', (req, res) => {
    res.json({ ok: 'ok' })
  })
}
