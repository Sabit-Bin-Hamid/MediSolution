/**
 * configuring stripe 
 */
let Publishable_Key = 'pk_test_51JVZGyIEMXtbOmTQYwz1VsnMxrdmLSiw62kuOoV5unVqRmpx7DJmHGMerbukLDJ8RT6cKnnbdHXq8tyudhUP8oBP00oxcSsygb'
let Secret_Key = 'sk_test_51JVZGyIEMXtbOmTQGy8wEO5PYT9aABm7gbdVhYXu7bTg1NvFc8KIn2zUgpLHXUSPcCcWpNr7XSTBhIy6cWCTKlo100H7vRoNlD'

const stripe = require('stripe')(Secret_Key);

/**
 * exports module
 */
module.exports = {
    Publishable_Key,
    stripe
}