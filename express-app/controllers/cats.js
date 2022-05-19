const Cats= require('../models/catsModels')

const getAllCats=async (req,res)=>{

    try {

        const cats=await Cats.find({});

        if(cats.length>0){
            return res.status(200).json({cats});
        }
        res.status(404).json({success:false, msg:"Add Cats"})
        
    } catch (error) {
        res.status(500).json({success:false, msg:"went wrong please try again later"})
    }
}

const getSingleCat=async (req,res)=>{

    try {

        const {id}= req.params;

        const cat=await Cats.findById({_id:id});

        if(!cat){
            return res.status(404).json({success:false, msg:"Cat Not found"})
        }
        res.status(200).json({cat});
        
    } catch (error) {
        res.status(500).json({success:false, msg:"something went wrong please try again later"})
    }
}
const addCat=async(req,res)=>{
    
    try {

        const {name, age, breed}=req.body;

        const cat=await Cats.create({name,age,breed})

        if(!cat){
            return res.status(404).json({success:false, msg:"Cat Not created"})        
        }
        res.status(200).json({cat});

    } catch (error) {
        res.status(500).json({success:false, msg:"something went wrong please try again later"})
    }
}
const updateCat=async(req,res)=>{
    
    try {

        const {id}= req.params;

        const {name, age, breed}=req.body;

        const cat=await Cats.findByIdAndUpdate({_id:id},{name,age,breed},{runValidators:true})

        if(!cat){
            return res.status(404).json({success:false, msg:"Cat Not found"})     
        }
        res.status(200).json({cat});
        
    } catch (error) {
        res.status(500).json({success:false, msg:"something went wrong please try again later"})
    }
}
const deleteCat=async(req,res)=>{

    try {

        const {id}= req.params;

        const {name, age, breed}=req.body;

        const cat=await Cats.findByIdAndDelete({_id:id})

        if(!cat){
            return res.status(404).json({success:false, msg:"Cat Not found"})     
        }
        res.status(200).json({cat});
        
    } catch (error) {
        res.status(500).json({success:false, msg:"something went wrong please try again later"})
    }
}

module.exports={getAllCats,getSingleCat,deleteCat,updateCat,addCat}