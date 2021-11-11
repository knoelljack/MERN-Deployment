const {Pirate} = require('../models/pirate.model');

//CREATE
module.exports.createPirate = (req,res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => {
            console.log('VALIDATIONS HAVE FAILED');
            res.status(400).json(err);
        })
};

//READ
module.exports.getOnePirate = (req,res) => {
    Pirate.findOne({_id:req.params.id})
        .then(onePirate => res.json(onePirate))
        .catch(err => res.json(err))
};

module.exports.getAllPirates = (req,res) => {
    Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch(err => res.json(err))
};

//UPDATE
module.exports.updatePirate = (req,res) => {
    Pirate.findByIdAndUpdate({_id:req.params.id}, req.body, {runValidators:true, new:true})
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => {
            console.log('VALIDATIONS HAVE FAILED');
            res.status(400).json(err);
        })
};
//DELETE
module.exports.deletePirate = (req,res) => {
    Pirate.deleteOne({_id:req.params.id})
        .then(deletedPirate => res.json(deletedPirate))
        .catch(err => res.json(err))
};