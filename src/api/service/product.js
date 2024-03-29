const Product=require('../model/product')

module.exports={
    addProductDB:(data)=>Product.create(data),
    getProductDB:(filter)=>Product.findOne(filter),
    updateProductDB:(filter, data)=>Product.findOneAndUpdate(filter, data, { new: true }),
    deleteProductDB:(filter)=>Product.findOneAndDelete(filter),
    listingDB:(filter,skip,limit)=>Product.find(filter).skip(skip).limit(limit).exec(),
    totalRecordDB:(filter)=>Product.countDocuments(filter)
}