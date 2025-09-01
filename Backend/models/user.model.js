const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minLength: [3, 'First name must be at least 3 characters long']
        },
        lastName: {
            type: String,
            required: true,
            minLength: [3, 'Last name must be at least 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketID: {
        type: String,
    },
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function(password) {
    return await bycrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bycrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;