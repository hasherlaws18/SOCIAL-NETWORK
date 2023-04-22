const { Schema, model, Types } = require('mongoose');
const { Thought } = require('.');
const reactionSchema = require('./Reaction');


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

thoughtsSchema.virtuals('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = ('Thought', thoughtsSchema);

module.exports = Thought;