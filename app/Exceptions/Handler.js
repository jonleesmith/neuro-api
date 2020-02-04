'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Raven = require('raven');

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
//   async handle (error, { request, response }) {

//     use('Logger').error(error)

//     // Not correct login
//     if ( error.status == 401 )
//     {
//         response.status(401)
//         return response.json({
//             message: 'Unauthorized request',
//         })
//     }

//     // Logged in but not correct permssions
//     if ( error.name == 'UnauthorizedAccessException' )
//     {
//         response.status(403)
//         return response.json({
//             message: "You don't have the correct permissions",
//         })
//     }

//     // if ( error.status == 500 ) {

//     //     Raven.captureException(error)

//     //     if ( process.env.NODE_ENV == 'development' )
//     //     {
//             console.log(error)
//     //     }

//     //     return response.json({
//     //         message: 'Something went wrong',
//     //     })
//     // }

//     response.status(error.status).send(error.message)

//   }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report (error, { request }) {

  }

}

module.exports = ExceptionHandler
