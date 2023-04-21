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
            const user = await this.PostNewUser.create(req.body);
            res.json(user); 
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update User
    async PutUser(req, res) {
        try{
            const user = await user.findOneandUpdate(
                {_id: req.params.userId},
                { $set: req.body},
                {runValidators: true, new:true}
            );
            if(!user){
                res.status(404).json({ message: 'No course with this id!'});
            }
            res.json(user);
        }catch(err){
            res.status(500).json(err);
        };
    },
    //Delte user
    async deleteUser(req, res) {
        try{
            const user = await User.findoneandDelete({_id: req.params.userId});

            if(!user){
                res.status(404).json({message: 'No User with that ID'});
            }
            await Thoughts.deleteMany({ _id : { $in: user.Thought}});
            res.json({message: 'User and thoughts deleted'})
        } catch(err) {
            res.status(500).json(err);
        }
    },
}