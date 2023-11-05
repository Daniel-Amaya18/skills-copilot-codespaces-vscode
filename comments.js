// Create web server with express
// Created by @simplymanas(Manas Sadhukhan)
// Created at 13 May 2021

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController')
const auth = require('../middleware/auth')

router.post('/comment', auth, commentController.createComment);
router.get('/comments/:postId', commentController.getComments);

module.exports = router;