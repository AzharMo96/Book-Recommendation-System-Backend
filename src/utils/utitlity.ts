// import crypto from "crypto"
// import bcrypt from "bcryptjs"
// import { Response } from "express"
// import HTTPStatus from "http-status"

// export const generateRandomPassword = () => {
//   const charset =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
//   let password = ""
//   for (let i = 0; i < 12; i++) {
//     const randomIndex = crypto.randomInt(0, charset.length)
//     password += charset[randomIndex]
//   }
//   return password
// }

// export const generateRandomNumber = () => {
//   const characters = "0123456789"
//   const charLength = characters.length
//   let randomString = ""

//   for (let i = 0; i < 12; i++) {
//     const randomIndex = crypto.randomInt(0, charLength)
//     randomString += characters.charAt(randomIndex)
//   }
//   return randomString
// }

// export const decrypt = async (data: string, hashData: string) => {
//   const match = await bcrypt.compare(data, hashData)
//   return match
// }

// export const encrypt = async (data: string) => {
//   const salt = await bcrypt.genSalt(10)
//   let mystr = await bcrypt.hash(data, salt)
//   return mystr
// }

// interface errorObject {
//   message: string
// }

// interface errorResponseJson {
//   error: errorObject
// }

// export const createErrorResponseJSON = (error: errorObject) => {
//   const errorResponse = { error }
//   return errorResponse
// }

// export const sendJSONResponse = (
//   res: Response,
//   statusCode: number,
//   data: errorResponseJson
// ) => {
//   res.status(statusCode).json(data)
// }

// export const serverError = (res: Response) => {
//   let code: number, response: errorResponseJson
//   const data: errorObject = {
//     message: "Internal Server Error",
//   }
//   code = HTTPStatus.INTERNAL_SERVER_ERROR
//   response = createErrorResponseJSON(data)
//   return sendJSONResponse(res, code, response)
// }

// export const badRequestError = (res: Response, errors: string) => {
//   let code: number, response: errorResponseJson
//   const data = { message: errors }
//   code = HTTPStatus.BAD_REQUEST
//   response = createErrorResponseJSON(data)
//   return sendJSONResponse(res, code, response)
// }
