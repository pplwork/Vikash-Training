const mongoose= require('mongoose')

const catsModel=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:15,
        minlength:4,
    },
    age:{
        type:Number,
        required:true
    },
    breed:{
        type:String,
        default:"Street Cat",
        maxlength:20,
    }
})

module.exports=mongoose.model('Cats',catsModel);

