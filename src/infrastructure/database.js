const mongoose = require('mongoose');

const uri = "mongodb+srv://andrevrj:<968741>@cluster0.9mvo2be.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    car: {
        type: String,
        unique: true,
    },
    name: String,    
});

const CarModel = mongoose.model('CarModel', CarSchema);

module.exports = {
    UserModel: CarModel,
};