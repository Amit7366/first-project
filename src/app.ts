import express, { Application, Request, Response } from 'express'
import { studentRoutes } from './app/modules/student/student.route'
import cors from 'cors'
const app: Application = express()
// const port = 3000

app.use(express.json())
app.use(cors())

//application routes
app.use('/api/v1/students', studentRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Server is Running')
})

export default app
