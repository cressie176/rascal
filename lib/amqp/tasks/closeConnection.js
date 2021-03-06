'use strict'

var debug = require('debug')('rascal:tasks:checkQueues')
var format = require('util').format
var _ = require('lodash')

module.exports = _.curry(function(config, ctx, next) {
    debug(format('Closing connection: %s', ctx.connectionConfig.loggableUrl))
    if (!ctx.connection) return next(null, config, ctx)
    ctx.connection.close(function(err) {
        next(err, config, ctx)
    })
})
