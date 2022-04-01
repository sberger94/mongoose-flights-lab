const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/flights'

mongoose.connect('mongodb://localhost/flights', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('disconnected', () => {
    console.log(`mongoose disconnected to ${connectionString}`);
})

