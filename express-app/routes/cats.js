const express= require('express')
const router=express.Router()
const { getSingleCat, updateCat, deleteCat, getAllCats, addCat } = require('../controllers/cats')


router.route('/:id').get(getSingleCat).patch(updateCat).delete(deleteCat)
router.route('/').get(getAllCats).post(addCat)

module.exports=router;