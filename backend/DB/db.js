import mongoose, { connect } from "mongoose";

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb Connected")
    } catch (error) {
        console.log(error)
    }
}

export default ConnectDb;