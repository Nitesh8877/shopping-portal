const { BadRes } = require("../../utils/config");
const { responseMessage, statusType } = require("../../utils/contants");

module.exports = {
    addProductValidation:(req,res,next)=> {
        if( req.body.title==='') return BadRes(res, "Title can not allow to be empty.")
       if(!req.body.title) return BadRes(res,responseMessage.TITLE_REQUIRED)
       if( req.body.description==='') return BadRes(res, "Description can not allow to be empty.")
       if( req.body.status==='') return BadRes(res, "Status can not allow to be empty.")
       if(req.body.status)
       if( req.body.status!==statusType.AVAILABLE || req.body.status!==statusType.DISCONTINUED || req.body.status!==statusType.OUTOFSTOCK)
       return BadRes(res, `Status is valid for [${statusType.AVAILABLE}, ${ statusType.DISCONTINUED}, ${statusType.OUTOFSTOCK}]`)
       next()
    }
};
