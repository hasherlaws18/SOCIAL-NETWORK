const {User, Thought} = require('../models')

module.exports = {
    //Get all Thoughts
    async getThought(req, res) {
        try{
            const thought = await Thought.find();
            res.json(thought);
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
            const thought = await this.PostNewThought.create(req.body);
            res.json(thought); 
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update Thought
    async PutThought(req, res) {
        try{
            const thought = await user.findOneandUpdate(
                {_id: req.params.thoughtId},
                { $set: req.body},
                {runValidators: true, new:true}
            );
            if(!thought){
                res.status(404).json({ message: 'No course with this id!'});
            }
            res.json(user);
        }catch(err){
            res.status(500).json(err);
        };
    },
    //Delte user
    async deletethoughts(req, res) {
        try{
            const thought = await User.findoneandDelete({_id: req.params.userId});

            if(!thought){
                res.status(404).json({message: 'No User with that ID'});
            }
            await Thoughts.deleteMany({ _id : { $in: user.Thoughts}});
            res.json({message: 'User and thoughts deleted'})
        } catch(err) {
            res.status(500).json(err);
        }
    },
}