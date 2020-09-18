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
    async handle (error, { request, response }) {

        use('Logger').error(error)

        console.error(error)

        if ( error.status == 401 )
        {
            response.status(401)
            return response.json({
                message: 'Unauthorized request',
            })
        }

        //  Logged in but not correct permssions
        if ( error.name == 'UnauthorizedAccessException' )
        {
            response.status(403)
            return response.json({
                message: "You don't have the correct permissions",
            })
        }

        if ( error.name === 'ValidationException' )
        {
            return response.withErrors(error.messages, 422)
        }

        if ( error.name === 'ModelNotFoundException' )
        {
            return response.withErrors(error.messages, 404)
        }

        return response.status(error.status).send(error.message)

    }

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
    console.log(error)
  }

}

module.exports = ExceptionHandler
