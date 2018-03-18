const redis = require('redis')
const client = redis.createClient('6379', 'localhost')
const { promisify } = require('util')
client.hgetall = promisify(client.hgetall)

client.on('connect', () => {
  console.log('connected') // connected
})

client.on('error', (err) => {
  console.log('Error ' + err)
})

client.hset('users:1', 'name', 'Yo', 'age', 35, redis.print) // Reply: 0
client.hgetall('users:1')
  .then(res => console.log(res)) // Yo
  .catch(err => console.log(err))

client.hmset('hosts', 'mjr', '1', 'another', '23', 'home', '1234', redis.print) // Reply: OK
client.hgetall('hosts')
  .then(res => console.log(res))
  .catch(err => console.log(err))
