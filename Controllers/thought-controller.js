const {User, Thought} = require('../models')

module.exports = {
    //Get all Thoughts
    async getThought(req, res) {
        try{
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSinglethought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');

            if(!thought){
                return res.status(404).json({message: 'No thought with that ID'});
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async PostNewThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought); 
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update Thought
    async PutThought(req, res) {
        try{
            const thought = await Thought.findOneandUpdate(
                {_id: req.params.thoughtId},
                { $set: req.body},
                {runValidators: true, new:true}
            );
            if(!thought){
                res.status(404).json({ message: 'No thought with this id!'});
            }
            res.json(user);
        }catch(err){
            res.status(500).json(err);
        };
    },
    //Delte thought
    async deletethoughts(req, res) {
        try{
            const thought = await Thought.findOneAndRemove({_id: req.params.thoughtId});

            if(!thought){
                res.status(404).json({message: 'No Thought with that ID'});
            }
            res.json({message: 'thoughts are deleted'})
        } catch(err) {
            res.status(500).json(err);
        }
    },

    async AddReaction(req, res) {
        try{
            const thought = await Thought.findOneandUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reactions: req.body}},
                {runValidators: true, new:true}
            );

            if(!thought){
                res.status(404).json({message: 'No Thought with that ID'});
            }
            res.json(thought);
        } catch(err){
            res.status(500).json(err);
        }
    },

    async RemoveReaction(req, res) {
        try{
            const thought = await Thought.findOneandUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {new: true}
            );

            if(!thought){
                return res.status(404).json({message: 'No Thought was found'})
            }
            res.json(thought);
        } catch(err){
            res.status(500).json(err);
        }
    },
}