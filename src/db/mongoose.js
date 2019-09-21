const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager2-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const me = new User({
  name: 'sandy',
  age: 80
})

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('error', error)
// })

const task = new Task({
  description: 'testing',
  completed: true
})

task.save().then(() => {
  console.log(task)
}).catch((error) => {
  console.log('error', error)
})