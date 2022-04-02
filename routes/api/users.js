const express = require('express');
const router = express.Router();

// const User = require('../../models/User');

// @route   GET api/users
// @desc    Get all users
// @accss   Public
router.get('/', (req, res) => {
    Pokemon.find()
        .sort({ name: 1 })
        .then(users => {
            res.json(users);
        })
        .catch(err => console.log(err));
});

// @route   POST api/users
// @desc    Create a user
// @accss   Public (usually private if using authentication)
router.post('/', async (req, res) => {
    const newUser = new User({

    });

    try {
        user = await newuser.save()
        res.json(user);
    } catch (e) {
        return next(e);
    }
});

// @route   DELETE api/users/id
// @desc    Delete a user
// @accss   Public (usually private if using authentication)
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;