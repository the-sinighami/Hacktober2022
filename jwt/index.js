require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

app.use(express.json())

const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]

const users= [ ]
app.post('/user',async(req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = bcrypt.hash(req.body.password, salt)
        const user = { name: req.body.name, password: hashedpassword }
        users.push(user)
        res.status(201).send();

    } catch (e)
    {

    }
    

})

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.listen(3000)