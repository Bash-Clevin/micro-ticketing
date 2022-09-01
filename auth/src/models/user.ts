import mongoose from 'mongoose'
import { Password } from '../services/password'

// describe properites to create new user
interface UserAttrib {
  email: string
  password: string
}

// describes properies of user model
interface  UserModel extends mongoose.Model<UserDoc> {
  build(attrib: UserAttrib): UserDoc
}

// descibes user doc properties
interface UserDoc extends mongoose.Document {
  email: String
  password: String
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', async function(done){
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'))
    this.set('password', hashed)
  }
  done()
})

userSchema.statics.build = (attrib: UserAttrib) => {
  return new User(attrib)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export { User }