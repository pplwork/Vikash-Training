require("dotenv").config()
const express= require("express");
const app= express();
const cors= require("cors")
const connectDB= require('./DB/db')
const notFoundHandler=require('./middleware/notFound')

const PORT=4000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send('<h1>Success</h1>')
})

const catsRouter= require("./routes/cats")
app.use("/api/v1/cats",catsRouter);


app.use(notFoundHandler);

const start=async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,console.log(`server is listening on port ${PORT}...`))
    } catch (error) {
        console.log(error)
    }
}

start()