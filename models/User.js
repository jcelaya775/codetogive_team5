const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        Name: req.body.Name,
        Age: req.body.Age,
        School: req.body.School
    }
);

module.exports = User = mongoose.model('User', UserSchema);