const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },

    description: {
        type: String, required: true
    },
    image: {
        type: String, required: true
    },
    // burda teze bir catagory yaza bilemm yada enum sazlayacam 
    category: {
        type: String, required: true
    },
    like: {
        type: Number, default: 0
    },
    dislike: {
        type: Number, default: 0
    },
    createDate: {
        type: Date,
        default: new Date().toISOString()
    }
})

module.exports = mongoose.model('Product', productSchema)