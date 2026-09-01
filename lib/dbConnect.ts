import mongoose from "mongoose"

type ConnectionObject ={
    isConnnected?: number ;
}
const connection : ConnectionObject = {}
async function dbConnect() : Promise<void>{
    if(connection.isConnnected){
        console.log("Already connected to database")
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI as string  || '', {});
        connection.isConnnected = 1;
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}