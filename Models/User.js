const { Schema, model } = require('monogoose');

const userSchema = new Schema(
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
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        toJSON: {
            virtual: true,
        },
        id: false,
    }
);

userSchema.virtual('friendcount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;