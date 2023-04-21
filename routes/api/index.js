const router = require('express').Router();
const thoughtroutes = require('./thought-routes');
const userroutes = require('./user-routes');

router.use('/thought', thoughtroutes);
router.use('/user', userroutes);

module.exports = router;