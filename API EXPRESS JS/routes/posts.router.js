const express = require('express');
const router = express.Router();

const posts = require('../controller/posts.controller');
const postsController = require('../controller/posts.controller');


//route to send token to user, without the need of authentication
router.get('/sendToken', postsController.sendToken);

router.get('/', postsController.authenticateJWT, postsController.getAll);
router.get('/:id', postsController.authenticateJWT, postsController.getById);
router.post('/', postsController.authenticateJWT, postsController.create);
router.put('/:id', postsController.authenticateJWT, postsController.update);
router.delete('/:id', postsController.authenticateJWT, postsController.delete);

module.exports = router;