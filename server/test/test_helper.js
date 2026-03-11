const { log, warn } = console;
const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost/sodaDiner',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
    )
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            warn('Something went Wrong with the Database Connection!', err)
        });
});

afterEach(done => {
    const { sodas } = mongoose.connection.collections; 
    sodas.drop()
        .then(() => done())
        .catch(() => done());
});

beforeEach(done => {
    const { diners } = mongoose.connection.collections; 
    diners.drop()
        .then(() => done())
        .catch(() => done());
});
