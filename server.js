const express=require("express")
const path=require("path")


const app=express();

const replicaApp=process.env.APP_NAME
const port=3000

app.use("/images",express.static(path.join(__dirname,'images')))

app.use("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
    console.log(`request served by ${replicaApp}`)
})

app.listen(port,()=>{
    console.log(`${replicaApp} running on port ${port}`)
})