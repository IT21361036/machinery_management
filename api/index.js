import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import machinesRoute from "./routes/machines.js"
import submachinesRoute from "./routes/submachines.js"
import cookieParser from "cookie-parser";
import cors from 'cors';
import cookiesMiddleware from 'universal-cookie-express';

const app = express();
dotenv.config();

const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})


//middleware
app.use(cors())
app.use(cookieParser())
app.use(cookiesMiddleware())
app.use(express.json())

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'localhost');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use('/api/machines',machinesRoute)
app.use("/api/submachines",submachinesRoute);




app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
})

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend .")
});
