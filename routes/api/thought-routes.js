const router = require('express').Router();
const {
   getThought,
   getSinglethought,
   PostNewThought,
   PutThought,
   deletethoughts,
} = require('../../Controllers/Thought-controller');

router.route('/').get(getThought).post(PostNewThought);

router
.route('/:thoughtId')
.get(getSinglethought)
.put(PutThought)
.delete(deletethoughts);

module.exports = router;