const express = require('express')
const env = require('./env')
const PORT = env.port
const HOST = env.host
const app = express()
const bodyParser = require('body-parser')
const faker = require('faker')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).send('Hello there, welcome')
})

app.get('/v1/user', (req, res) => {
    let users = []
    for (i = 0; i <= 5; i++) {
        users.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        });
    }
    res.status(200).send({status:'200',message:'success',data:users});
})

app.listen(PORT, HOST)
console.log(`App running on http://${HOST}:${PORT}`)