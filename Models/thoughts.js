const { Schema, model, Types } = require('mongoose');
const { Thought } = require('.');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            Required: true,
            minlength: 1,
            maxlength: 200,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            Required: true,
        },
        reactions: 
            [reactionSchema],
        
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectedId,
            default: () => new Types.ObjectedId(),
        },
        reactionBody: {
            type: String,
            Required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            Required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timeStamp) => dateFormat(timestamp),
        },
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);
thoughtsSchema.virtuals('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = ('Thought', thoughtsSchema);

module.exports = Thought;