const redis = require('redis')
const client = redis.createClient('6379', 'localhost')
const { promisify } = require('util')
client.get = promisify(client.get)

client.on('connect', () => {
  console.log('connected') // connected
})

client.on('error', (err) => {
  console.log('Error ' + err)
})

client.set('name', 'Yo', redis.print) // Reply: OK
client.get('name').then(res => console.log(res)) // Yo
