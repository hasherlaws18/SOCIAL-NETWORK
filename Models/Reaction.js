const { Schema, Types} = require('mongoose');

const reactionSchema = new Schema(

    {
        reactionId: {
            type: Schema.Types.ObjectId,
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
            
        }
        
    },{
        toJSON: {
            getters: true,
        },
        id: false
    }
);

module.exports = reactionSchema;