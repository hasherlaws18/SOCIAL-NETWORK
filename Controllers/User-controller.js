const {User, Thought} = require('../models')

module.exports = {
    //Get all Users
    async getUser(req, res) {
        try{
            const user = await User.find();
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v');

            if(!user){
                return res.status(404).json({message: 'No user with that ID'});
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async PostNewUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user); 
        } catch (err) {
            res.status(500).json(err);
            console.log(err)
        }
    },
    // Update User
    async PutUser(req, res) {
        try{
            const user = await User.findOneandUpdate(
                {_id: req.params.userId},
                { $set: req.body},
                {runValidators: true, new:true}
            );
            if(!user){
                res.status(404).json({ message: 'No user with this id!'});
            }
            res.json(user);
        }catch(err){
            res.status(500).json(err);
        };
    },
    //Delte user
    async deleteUser(req, res) {
        try{
            const user = await User.findOneAndDelete({_id: req.params.userId});

            if(!user){
                res.status(404).json({message: 'No User with that ID'});
            }
            await Thought.deleteMany({ _id : { $in: user.thoughts}});
            res.json({message: 'User and thoughts deleted'})
        } catch(err) {
            res.status(500).json(err);
            console.log(err)
        }
    },
}