// Import model to create controllers..
let Soda = require('../models/Soda');

module.exports = {
  createSoda(req, res, next) {
    let sodaProps = req.body;
    Soda.create(sodaProps)
      .then(soda => res.send(soda))
      .catch(next);
  },

  findAllSodas(req, res) {
    Soda.find()
      .then(sodas => res.send({ sodas }));
  },

  getSodaInfo(req, res) {
    let sodaID = req.params._id;
    Soda.findById({ _id: sodaID })
      .then(soda => res.send({ soda }));
  },

  updateServing(req, res) {
    let sodaID = req.params._id;
    let sodaProps = req.body.serving;
    Soda.findByIdAndUpdate({ _id: sodaID }, { $set: { served: sodaProps } }, { new: true })
      .then(serving => res.send({ serving }));
  },

  editSoda(req, res) {
    let sodaID = req.params._id;
    let sodaProps = req.body;
    Soda.findByIdAndUpdate({ _id: sodaID }, sodaProps)
      .then(() => Soda.findById({ _id: sodaID }))
      .then(soda => res.send(soda));
  },

  deleteSoda(req, res) {
    let sodaID = req.params._id;
    Soda.findByIdAndRemove({ _id: sodaID })
      .then(soda => res.send({ soda }));
  }
};