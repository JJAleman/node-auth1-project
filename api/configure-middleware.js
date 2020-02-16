const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');

const usersRouter = require('../users/users-router.js');

// Notes to self this will use /api/auth
router.use('/auth', authRouter);

// this will use /api/users
router.use('/users', usersRouter);

// api
router.get('/', (req, res) => {
    res.json({ api: "It's Live!"});
});



module.exports = router;