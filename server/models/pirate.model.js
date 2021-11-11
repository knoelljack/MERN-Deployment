const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Pirate must have a name.'],
        minlength : [2, 'Pirates name must be at least 2 characters long.']
    },
    image : {
        type : String,
        required : [true, 'Pirate must have an image.']
    },
    treasureChests : {
        type : Number,
        required : [true, 'Please specify number of treasure chests'],
        min : [0, 'Number of chests cannot be less than 0']
    },
    catchPhrase : {
        type : String,
        required : [true, 'Pirate must have a catch phrase.'],
        minlength : [3, 'Catch phrase must be at least 3 characters long']
    },
    position : {
        type : String,
        required : [true, 'Pirate must have a position'],
    },
    pegLeg : {
        type : Boolean,
        required : [true, 'Must specify whether pirate has a peg leg or not.']
    },
    eyePatch : {
        type : Boolean,
        required : [true, 'Must specify whether pirate has an eye patch or not.']
    },
    hookHand : {
        type : Boolean,
        required : [true, 'Must specify whether pirate has a hook hand or not.']
    }
})

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);