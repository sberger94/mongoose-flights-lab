const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        // Date created + 1 year
        default: function() {
            return new Date().setFullYear(new Date().getFullYear() + 1)
          },
        timestamps: true,
        // required: [true, 'Flight departure required']
    },
    destinations: [destinationSchema],
    // tickets: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Ticket'
    // }]
});

module.exports = mongoose.model('Flight', flightSchema);