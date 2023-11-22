import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    const result = await StudentServices.createStudenIntoDb(studentData)
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDb()
    res.status(200).json({
      success: true,
      message: 'Student is Retrived Successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDb(studentId)
    res.status(200).json({
      success: true,
      message: 'Student Retrived',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
}
