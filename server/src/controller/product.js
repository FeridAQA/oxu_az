const product = require("../schema/product.js")

const get_product = async (req, res) => {
    try {
        const data = await product.find()
        console.log(data);
        res.status(200).send(data)
    } catch (error) {

        console.log(error.message);
        res.status(200).send(error)
    }
}

const get_by_id = async (req, res) => {
    try {
        const {id}=req.params
        const data = await product.findById(id)
        if (!data) {
            return res.status(404).send('seyfe tapilmadi')
        }
        res.status(200).send(data)
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error)
    }
}

const del_product = async(req,res)=>{
    try {
        const {id}=req.params
        const data=await product.findByIdAndDelete(id)
        if(!data){
            return res.status(404).send('seyfe tapilmadi')
        }
        res.status(200).send(data)
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error)
        
    }
}

const post_product = async (req, res) => {

    try {
        const data = await product.create(req.body)
        res.status(200).send(data)
    } catch (error) {
        console.log(error.message);
        res.status(200).send(error)
    }
}


module.exports = { get_product, post_product,get_by_id,del_product }