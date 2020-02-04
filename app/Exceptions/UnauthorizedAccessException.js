'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class UnauthorizedAccessException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
}

module.exports = UnauthorizedAccessException
