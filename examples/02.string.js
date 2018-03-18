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
client.get('name')
  .then(res => console.log(res)) // Yo
  .catch(err => console.log(err))

client.mset(['name1', 'Yo', 'name2', 'Yea'], redis.print)
client.mget(['name1', 'name2'], (_, res) => console.log(res))
