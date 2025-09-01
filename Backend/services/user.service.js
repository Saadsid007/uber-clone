const userModel = require('../models/user.model');

module.exports.createUser = async ({firstName, lastName, email, password}) => {
    if(!firstName || !lastName || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = userModel({
        fullName: { firstName, lastName },
        email,
        password
    });

    await user.save();

    return user;
}
