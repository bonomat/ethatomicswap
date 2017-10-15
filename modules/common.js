const RIPEMD160 = require('ripemd160');
const crypto = require('crypto');

/**
 * Atomic swap class
 *
 * @author Djenad Razic
 * @company Altcoin Exchange, Inc.
 */
var Common = function () {

    /**
     * Generate random secret
     * @returns {{secret: (*|string), hashedSecret: *}}
     * @constructor
     */
    this.GenerateSecret = function() {

        var secretBuffer = crypto.randomBytes(32);
        var secret = secretBuffer.toString('hex');
        var hashedSecret = new RIPEMD160().update(secretBuffer).digest('hex');

        console.log("\nSecret:\t\t\t", secret);
        console.log("\Hashed Secret:\t\t", hashedSecret, "\n");

        return { "secret": secret, "hashedSecret": hashedSecret };
    }
};

module.exports = Common;