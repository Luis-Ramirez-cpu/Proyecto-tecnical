const mongoose = require('mongoose');
const URI = 'mongodb+srv://luis_ramirez:darkness@cluster0.fk9thba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
module.exports = mongoose; 