const {CustomAPIError} = require("../errorHandler")

const errorHandlerMiddleware=(err,req,res,next)=>{

    let customError={
        statusCode: err.statusCode || 500,
        msg:err.message || 'Something went wrong :('
    }

    if(err.name== 'ValidationError'){
        customError.msg= Object.values(err.errors).map((item)=>item.message).join(',')
        customError.statusCode = 400;
    }
    
    if(err.name == 'CastError'){
        customError.msg = `no item found with id : ${err.value}`;
        customError.statusCode=404;
    }
    if(err.code && err.code === 11000){
        customError.msg=`Duplicate value of email ${Object.keys(err.keyValue)}`
        customError.statusCode = 400;
    }

    return res.status(customError.statusCode).json({msg:customError.msg})
}

module.exports=errorHandlerMiddleware