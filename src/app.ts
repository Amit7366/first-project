import express, { Application, Request, Response } from 'express'
// import cors from 'cors'
const app: Application = express()
// const port = 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  const a = 10

  res.send(a)
})

export default app