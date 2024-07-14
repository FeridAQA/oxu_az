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
        const { id } = req.params
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

const del_all = async (req, res) => {
    try {
        await product.collection.drop()
        res.status(200).send('all deleted')
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error)
    }
}

const del_product = async (req, res) => {
    try {
        const { id } = req.params
        const data = await product.findByIdAndDelete(id)
        if (!data) {
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
        res.status(201).send(error)
    }
}


////

const update_product = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;

        console.log('Updating product with ID:', id);
        console.log('Update data:', update);
        update.update_pro = true;

        const options = { new: true, runValidators: true }; // Yenilənmiş sənədi geri qaytar və validasiyanı işə sal

        const updatedProduct = await product.findByIdAndUpdate(id, { $set: update }, options);

        if (!updatedProduct) {
            return res.status(404).send('Product not found');
        }

        console.log('Updated product:', updatedProduct);
        res.status(200).send(updatedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
    }
};



module.exports = { get_product, post_product, get_by_id, del_product, update_product,del_all }