const mongoose = require('mongoose');

const UserDetailSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telephone: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: 'default.jpg' }, 
  birthday: { type: Date, required: true }, 
  userType: { type: String, enum: ['admin', 'user'], default: 'user' }, 
  createdAt: { type: Date, default: Date.now }, 
});


UserDetailSchema.methods.isValidPassword = function(password) {
  return this.password === password;
};

const User = mongoose.model("UserInfo", UserDetailSchema);

module.exports = User;