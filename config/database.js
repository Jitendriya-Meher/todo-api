
const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {

    mongoose.connect( process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => console.log('connection Successfully'))
    .catch( () => {
        console.log('connction fails');
        console.error(error.message);
        // exit
        process.exit(1);
    });

};

module.exports = dbConnect;