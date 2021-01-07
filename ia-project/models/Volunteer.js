
const { Schema, model } = require('mongoose');

const volunteerSchema = new Schema ({
    firstname: {
        type: String,
        required: [true, 'Please enter your firstname']
    },
    lastname: {
        type: String,
        required: [true, 'Please enter your lastname']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Volunteer = model('volunteers', volunteerSchema);

module.exports = Volunteer;