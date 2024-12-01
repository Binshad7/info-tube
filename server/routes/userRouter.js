const express = require("express");
const passport = require("passport");
const user = express.Router();
const { generateToken, verifyToken } = require('../utils/jwtToken');

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}))

router.get(
    '/google/callback',
    passport.authenticate('google', { session: false }), 
    async (req, res) => {
        try {

            const userData = {
                id: req.user._id, 
                email: req.user.email,
                name: req.user.name,
                profilePicture: req.user.profilePicture
            };
            const token = await generateToken(userData);

            res.json({ success: true, token });
        } catch (err) {
            console.error('Error generating token:', err);
            res.status(500).json({ success: false, message: 'Token generation failed' });
        }
    }
);

router.get('/protected', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ success: false, message: 'No token provided' });
        }

        const token = authHeader.split(' ')[1]; 
        const verified = await verifyToken(token);

        if (!verified.success) {
            return res.status(403).json({ success: false, message: 'Invalid token' });
        }

        res.json({ success: true, message: 'Welcome to the protected route!' });
    } catch (err) {
        console.error('Error in protected route:', err);
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
});

module.exports = user