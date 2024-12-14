const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

mongoose.connect('mongodb+srv://Thaingo:Gz6etxdvVgf3cs3S@cluster0.j83xa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error(err));

const ratingSchema = new mongoose.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    timestamp: { type: Date, default: Date.now }
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },  // Nội dung bình luận
  userId: { type: String, required: true },  // ID người dùng bình luận
  username: { type: String, required: true }, // Tên người dùng
  dishId: { type: String, required: true },   // ID món ăn mà bình luận thuộc về
  createdAt: { type: Date, default: Date.now } // Thời gian tạo bình luận
});

const Comment = mongoose.model('Comment', commentSchema);

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('User', userSchema);

module.exports = router;
