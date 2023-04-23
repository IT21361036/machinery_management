import mongoose from 'mongoose';

const submachineSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    maxSubmachines:{
        type: Number,
        required: true,
    },
    desc:{
        type: String,
       required: true,
    },
    submachineNumbers:[{number:Number, unavailableDates: {type:[Date]}}],
 },
 {timestamps:true}
);

export default mongoose.model("Submachine", submachineSchema);