
const { Schema, model } = require('mongoose');

const adminSchema = new Schema ({
    username: {
        type: String,
        required: [true, 'Please enter your firstname']
    },
    password: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Admin = model('admins', adminSchema);

module.exports = Admin;