import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/user'

export default class AuthController {

    public async login({auth, request, response}){
        const email = request.input('email')
        const password = request.input('password')
        try {
          const token = await auth.use('api').attempt(email, password)
          response.status(200).json({
            status : true, 
            message: '.',
            data: token
          })
        } catch {
          response.status(200).json({
            status : false, 
            message: 'Satifactorio. Creaste un User nuevo.',
            data: response.badRequest('Invalid credentials')
          })
        }
      }
  
      public async logout({auth}){
        await auth.use('api').revoke()
        return {
          revoked: true
        }
      }


      public async store({request, response}: HttpContextContract) {
        try {
          const user = new User()
    
          user.username = request.input("username")
          user.email = request.input("email")
          user.password = request.input("password")
    
          user.save()
          const userJSON = user.serialize()
          
          response.status(200).json({
            status : true, 
            message: 'Satifactorio. Creaste un User nuevo.',
            data: userJSON
          })
    
        } catch (error) {
          response.status(400).json({
            status : false, 
            message : "ERROR. No has creado User nuevo."
          })
        }
      }
  
}
