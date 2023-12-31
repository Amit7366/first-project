export type Gurdian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}
export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type LocalGurdian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}
export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  email: string
  dateOfBirth: string
  contactNo: string
  emergencyContact: string
  bloodGroup?: 'A+' | 'O+' | 'B+' | 'AB+' | 'A-' | 'B-' | 'O-' | 'AB-'
  presentAddress: string
  permanentAddress: string
  gurdian: Gurdian
  localGurdian: LocalGurdian
  profileImg: string
  isActive: 'active' | 'inactive'
}
