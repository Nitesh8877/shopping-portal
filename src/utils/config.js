
module.exports={
    BadRes:(res,message="Bad Request",data=[])=>{
        return res.status(400).send({message,data});
    },
    SuccessRes:(res,status,message,data=[])=>{
        return res.status(status).send({message,data});
    },
    INTERNAL_SERVER_ERROR:(res,status=500,message="Something went wrong")=>{
        return res.status(status).send({message})
    }
}