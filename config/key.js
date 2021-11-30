if(process.env.NODE_ENV ==='production' ) {
    module.exports = require9('./prod')
} else {
    module.exports = require('./dev')
}