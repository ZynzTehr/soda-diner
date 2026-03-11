const { log } = console;
require('../server');
const assert = require('assert');
const mongoose = require('mongoose');
const Soda = mongoose.model('soda');
const Diner = mongoose.model('diner');

describe('Functionallity tests..', () => {
  it('Test 1: Create a new diner.', done => {
    let diner = new Diner({
      name: 'Las Playas',
      location: 'Pasadena, Ca',
      sodas: []
    });
    diner.save();
    Diner.findOne({ name: 'Las Playas' })
      .then(data => {
        assert(data.name === 'Las Playas');
      });
    done();
  });

  it('Test 2: Create a new diner.', done => {
    let diner = new Diner({
      name: 'Las Brisas',
      location: 'Redlands, Ca',
      sodas: []
    });
    diner.save();
    Diner.findOneAndDelete({ name: 'Las Playas' })
      .then(data => {
        assert(data.name === 'Las Playas');
      });
    done();
  });

  it('Test 3: Create a new soda.', done => {
    let soda = new Soda({
      name: 'Coke Plus',
      brand: 'Coca Cola',
      fizziness: 4,
      taste_rating: 2,
      served: false
    });

    soda.save();
    Soda.findOne({ name: 'Coke Plus' })
      .then(data => {
        assert(data.name === 'Coke Plus');
      });
    done();
  });

  it('Test 4: Create a new soda.', done => {
    let soda = new Soda({
      name: 'Coke Minus',
      brand: 'Coca Cola',
      fizziness: 4,
      taste_rating: 2,
      served: false
    });

    soda.save();
    Soda.findOneAndDelete({ name: 'Coke Minus' })
      .then(data => {
        assert(data.name === 'Coke Minus');
      });
    done();
  });


  it('Test 5: Change served status from false to true.', done => {
    let soda = new Soda({
      name: 'Fizzy Pop',
      brand: 'Fizzy Co.',
      fizziness: 3,
      taste_rating: 8,
      served: false
    });

    soda.save();
    Soda.findOne({ name: 'Fizzy Pop', served: false })
      .then(() => {
        Soda.findOneAndUpdate({ name: 'Fizzy Pop', served: false }, { name: 'Fizzy Pop', served: true })
          .then(data => {
            assert(data.served === true);
          });
        done();
      });
  });


  it('Test 6: Grab all sodas with served value set to true.', done => {
    let soda_1 = new Soda({
      name: 'Sprite',
      brand: 'Coca Cola',
      fizziness: 5,
      taste_rating: 10,
      served: true
    });

    let soda_2 = new Soda({
      name: 'Fanta',
      brand: 'Fanta',
      fizziness: 7,
      taste_rating: 9,
      served: true
    });

    let soda_3 = new Soda({
      name: 'Cherry Coke',
      brand: 'Coca Cola',
      fizziness: 6,
      taste_rating: 4,
      served: false
    });

    soda_1.save();
    soda_2.save();
    soda_3.save();
    Soda.find({ served: true })
      .then((data) => {
        assert(data.served === true);
      });
    done();
  });
});