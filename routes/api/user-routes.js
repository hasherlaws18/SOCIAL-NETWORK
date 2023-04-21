const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    PostNewUser,
    PutUser,
    deleteUser,
} = require('../../Controllers/User-controller');

router.route('/').get(getUser).post(PostNewUser);

router
.route('/:userId')
.get(getSingleUser)
.put(PutUser)
.delete(deleteUser);

module.exports = router;