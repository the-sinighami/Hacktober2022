var randomBytes = require('random-bytes')


randomBytes(64, function (error, bytes) {
    if (error) throw error
    console.log(bytes)
})