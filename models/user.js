const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String
});

// two arguments are to load something into mongo
mongoose.model('users', userSchema);