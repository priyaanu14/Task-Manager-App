const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 

// app.use((req, res, next) => {
//     res.status(503).send('Site is under maintainance. Try after some time.')
// })

const multer = require('multer')

const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on '+ port)
})

// const Task = require('./models/tasks')
// const User = require('./models/users')

// const main = async () => {
//     // const task = await Task.findById('6144edff363b27ac08d208ee')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('6144ecab546d14ba006f2916')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()