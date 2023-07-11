import mongoose, { connection } from "mongoose";

export async function connect (){
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection =mongoose.connection;
        connection.on('connected',()={
            console.log('connection suuccessfully !!!");
        })
        connection.on('error',(err)=>{
            console.log("Something not working:: " + err )
        })
    }
    catch (error){
        console.log("Something gose wrong??? ::  " + error);
    }
}