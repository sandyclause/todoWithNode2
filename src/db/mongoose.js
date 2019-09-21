const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager2-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('age must be a postive number')
      }
    }
  },
  password: {
    type: String,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error ('password cannot contain the word password')
      }
    },
    trim: true,
    required: true,
  }
})

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
})

// const me = new User({
//   name: 'sandy',
//   age: 80,
//   email: 'sandy@email.com',
//   password: 'p1assword'
// })

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