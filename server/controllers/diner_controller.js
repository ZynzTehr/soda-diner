// Import models to create controllers..
const Diner = require('../models/Diner');
const Soda = require('../models/Soda');

module.exports = {
  createDiner(req, res) {
    const dinerProps = req.body;
    Diner.create(dinerProps)
      .then(diner => res.send(diner));
  },

  findDiners(req, res) {
    Diner.find({})
      .then(diners => res.json({ diners }));
  },

  getDinerInfo(req, res) {
    const dinerID = req.params._id;
    Diner.findById({ _id: dinerID }).populate('sodas')
      .then(diner => res.send({ diner }));
  },

  editDiner(req,res) {
    let dinerID = req.params._id;
    let dinerProps = req.body;
// if statement to grab sodas to add them to diner or display nothing if you delete  sodas form diner..
    if(!dinerProps.sodas) dinerProps.sodas = [];
    Diner.findByIdAndUpdate({ _id: dinerID }, dinerProps)
    .then(() => Diner.findById({ _id: dinerID }))
    .then(diner => res.send({ diner }));
  },

  findSodasForDiner(req, res) {
    Soda.find().then(sodas => res.json({ sodas }));
  },

  sodasToServe(req, res) {
    Soda.find( { served: true } )
      .then(sodas => res.json({ sodas }));
  },

  addSodasToDiner(req, res) {
    const dinerID = req.params._id;
    const soda = req.body.sodas;
    Diner.findByIdAndUpdate({ _id: dinerID }, { $push: { sodas: soda } }, { new: true })
      .then(diner => res.send({ diner }));
  },

  deleteDiner(req, res) {
    const dinerID = req.params._id;
    Diner.findByIdAndRemove({ _id: dinerID })
      .then(diner => res.send({ diner }));
  }
};