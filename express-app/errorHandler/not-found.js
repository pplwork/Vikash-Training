const CustomAPIError= require('./custom-error')

class NotFoundError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCodes=403;
    }
}

module.exports=NotFoundError