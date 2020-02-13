'use strict'

const Env = use('Env')

module.exports = {
    /*
    |--------------------------------------------------------------------------
    | Authenticator
    |--------------------------------------------------------------------------
    */
    authenticator: 'jwt',

    /*
    |--------------------------------------------------------------------------
    | Jwt
    |--------------------------------------------------------------------------
    |
    | The jwt authenticator works by passing a jwt token on each HTTP request
    | via HTTP `Authorization` header.
    |
    */
    jwt: {
        serializer: 'lucid',
        model: 'App/Models/User',
        scheme: 'jwt',
        uid: 'email',
        password: 'password',
        options: {
            secret: Env.get('APP_KEY'),
            expiresIn: '6h',
        }
    },
}
