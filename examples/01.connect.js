const redis = require('redis')
const client = redis.createClient('6379', 'localhost')

client.on('connect', () => {
  console.log('connected')
})

client.on('error', function (err) {
  console.log('Error ' + err)
})
