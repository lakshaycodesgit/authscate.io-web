const mongoose=require('mongoose')
const  ProductSchema=mongoose.Schema({
    post:String,
    name:String,
    email:String,
    branch:String,
    explain:String,
    city:String,
    course:String,
    phoneno:Number,
    resume:String,
    linkedin:String,
    github:String,
})
module.exports=mongoose.model('register',ProductSchema)