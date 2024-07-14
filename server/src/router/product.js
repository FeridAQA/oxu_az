
const express = require('express')
const { get_product, post_product, get_by_id, del_product, update_product } = require('../controller/product.js')
const router = express.Router()

router.get('/getall',get_product)
router.get('/:id',get_by_id)
router.delete('/:id',del_product)
router.post('/post',post_product)
router.put('/put/:id',update_product)

module.exports =router