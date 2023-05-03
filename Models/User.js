const { Schema, model } = require('mongoose');
const ThoughtsSchema = require('./Thought')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            Unique: true,
            Required: true,
            Trimmed: true,
        },
        email: {
            type: String,
            Required: true,
            Unique: true,
            match: [/.+\@.+\..+/],
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }],
        friends:[ {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }]
        
    },{
       toJSON: {
            virtuals: true,
        },
        id: false, 
    }
);

UserSchema.virtual('friendcount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;