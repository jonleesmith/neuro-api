'use strict'

const { validateAll } = use('Validator')
const User = use('App/Models/User')
const Persona = use('Persona')

class AuthController {

    async login({ request, response, auth })
    {

        const { email, password } = request.only(['email', 'password'])

        const user = await Persona.verify({
            uid: email,
            password
        })

        const token = await auth.generate(user)

        return response.json({
            status: 200,
            data: token
        })

    }

    async register({ request, auth, response })
    {
        const payload = request.only(['email', 'password', 'password_confirmation'])

        const user = await Persona.register(payload)

        return response.json({
            status: 200,
            data: user.toJSON()
        })

    }

    async logout({ response })
    {
        return response.json({
            message: "Logged out",
            data: []
        })
    }

    async me({ request, response, auth })
    {
        let user = await auth.getUser();

        // await user.loadMany(['role', 'org'])

        return response.json({
            data: user.toJSON()
        })
    }

    async forgotPassword({ request, response })
    {
        const result = await Persona.forgotPassword(request.input('email'))
        return response.json({
            message: 'We\’ve sent you an email with a link to reset your password.'
        })
    }

    async resetPassword({ request, response, params })
    {
        const token = request.input('token')
        const payload = request.only(['password', 'password_confirmation'])
        const user = await Persona.updatePasswordByToken(token, payload)
        return response.json({
            message: 'Your password has been successfully changed.'
        })
    }

}

module.exports = AuthController
