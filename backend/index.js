const express= require("express"); 
const app=express();
const port =3000;
const cors=require('cors')
app.use(cors())
app.use(express.json());
const user_data={}

app.post('/register',(req,res)=>{
const {username,password}=req.body
const id=`${Date.now()}`
const user={
  id,username,password
}
user_data[id]=user
console.log("registered successfully")
return res.json({id})
})


























app.listen(port,()=>{console.log(`server is runiing at port ${port}`)})