const {addProductDB,getProductDB,updateProductDB,listingDB,deleteProductDB, totalRecordDB}=require('../service/product')
const { responseMessage, responseCode }=require('../../utils/contants');
const { SuccessRes, BadRes, INTERNAL_SERVER_ERROR } = require('../../utils/config');

module.exports={
    addProduct:async(req,res)=>{
        try {
            let {title}=req.body;
        let titleExist=await getProductDB({title:title?.toLowerCase()})
        req.body.title=title?.toLowerCase();
        if(titleExist) return BadRes(res,responseMessage.TITLE_ALREADY)
        let created=await addProductDB(req.body);
        if(created) return SuccessRes(res, responseCode.OK,responseMessage.PRODUCT_CREATE)
        return BadRes(res)
        } catch (error) {
          console.log("something went wrong", error);
          return INTERNAL_SERVER_ERROR(res)  
        }
    },
    updateProduct:async(req,res)=>{
        try {
            let {title}=req.body;
            let {id}=req.params;
            let product=await getProductDB({_id:id});
            if(!product) return BadRes(res, responseMessage.PRODUCT_N_FOUND);
            if(title!==product?.title){
                let duplicate=await getProductDB({title:title?.toLowerCase()});
                if(duplicate) return BadRes(res, responseMessage.TITLE_ALREADY)
            }
        req.body.title=title?.toLowerCase()
        let updated=await updateProductDB({_id:id},req.body);
        if(updated) return SuccessRes(res, responseCode.CREATED, responseMessage.PRODUCT_UPDATE);
        return BadRes(res)
        }  catch (error) {
            console.log("something went wrong", error);
            return INTERNAL_SERVER_ERROR(res)  
          }
    },
    deleteProduct:async(req,res)=>{
        try {
            let deleted=await deleteProductDB({_id:req.params.id});
            if(deleted) return SuccessRes(res, responseCode.OK, responseMessage.PRODUCT_DELETE);
            return BadRes(res)
        }catch (error) {
            console.log("something went wrong", error);
            return INTERNAL_SERVER_ERROR(res)  
          }
    },
    getProduct:async(req,res)=>{
        try {
            let response=await getProductDB({_id:req.params.id});
            if(response) return SuccessRes(res, responseCode.OK, responseMessage.PRODUCT_GET_SUCCESS,response);
            return res.status(204).send("record not found")
            
        } catch (error) {
            console.log("something went wrong", error);
            return INTERNAL_SERVER_ERROR(res)  
          }
    },
    listing:async(req,res)=>{
        try {
            const page = parseInt(req.query.page) || 1; 
            const limit = parseInt(req.query.limit) || 10;
            const searchTitle = req.query.title; 
            const searchStatus = req.query.status; 
            const skip = (page - 1) * limit; 
            let query = {};
            if (searchTitle) {
                query.title = { $regex: new RegExp(searchTitle, 'i') };
            }
            if (searchStatus) {
                query.status = { $regex: new RegExp(searchStatus, 'i') }; 
            }
            const products = await listingDB(query,skip,limit); 
            const totalCount = await totalRecordDB(query);
            return SuccessRes(res, responseCode.OK, responseMessage.PRODUCT_GET_SUCCESS,{totalRecords:totalCount,product:products})
        }  catch (error) {
            console.log("something went wrong", error);
            return INTERNAL_SERVER_ERROR(res)  
          } 
    },
}