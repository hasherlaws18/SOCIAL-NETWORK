const router = require('express').Router();
const {
   getThought,
   getSinglethought,
   PostNewThought,
   PutThought,
   deletethoughts,
   AddReaction,
   RemoveReaction,
} = require('../../Controllers/thought-controller')

router.route('/').get(getThought).post(PostNewThought);

router
.route('/:thoughtId')
.get(getSinglethought)
.put(PutThought)
.delete(deletethoughts);

router.route('/:thoughtId/reactions').post(AddReaction);

router.route('/:thoughtId/reactions/reactionsId').delete(RemoveReaction);

module.exports = router;