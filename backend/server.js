const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()
const app=express()
app.use(cors())
app.use(bodyParser.json())

const {Schema}=mongoose;
const productSchema= new Schema(
    {
     url:{
        type:String,
        required:true
     },
     name:{
        type:String,
        required:true
     },
     price:{
        type:Number,
        required:true
     }
    },
    {timestamps:true}
)
const Products=mongoose.model("products",productSchema);

//get all products
app.get("/products",(req,res)=>{
    Products.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({message:err})
        }
    })
})
//add product
app.post("/products",(req,res)=>{
    let product=new Products({
        url:req.body.url,
        name:req.body.name,
        price:req.body.price
    })
    product.save()
    res.send({message: "success"})
})
//delete
app.delete("/products/:id",(req,res)=>{
    const {id}=req.params;
    Products.findByIdAndDelete(id,(err,docs)=>{
        if(!err){
            res.send({message:"deleted"})
        }else{
            res.status(500).json({message:err})
        }
    })
})

const PORT=process.env.PORT;
const DB=process.env.DB_URL.replace("<password>",process.env.DB_PASSWORD)
mongoose.connect(DB,(err,docs)=>{
    if(!err){
        console.log("DB connect");
        app.listen(PORT,()=>{
            console.log("Port is up and running");
        })
    }
})
