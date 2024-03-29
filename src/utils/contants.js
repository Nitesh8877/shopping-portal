/**
 * This will contain the constants names used through out the code
 */
module.exports = {
    statusType: {
       AVAILABLE: 'available',
       OUTOFSTOCK: 'out of stock',
       DISCONTINUED: 'discontinued'
    },
responseCode:{
    BAD_REQUEST:400,
    OK:200,
    CREATED:201,
    INTERNAL_SERVER_ERROR:500,
},

    //response message
    responseMessage:{
    TITLE_ALREADY:"Title already exist.",
    TITLE_REQUIRED:'Title is requried',
    PRODUCT_CREATE:"Product created successfully",
    PRODUCT_DELETE:"Product deleted successfully",
    PRODUCT_UPDATE:"Product updated successfully",
    PRODUCT_GET_SUCCESS:"Product get successfully",
    PRODUCT_N_FOUND:"Product not found"
    }
}