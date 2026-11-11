const User = require('../models/User');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if(existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });
        
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
        
    }
}

const loginUser = async (req, res) => {}

module.exports = {
    registerUser,
    loginUser
};