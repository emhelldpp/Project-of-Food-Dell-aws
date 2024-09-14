import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:Object,
        require:true
    },
    items:{
        type:Array,
        required:true
    },
    status:{
        type:String,
        default:"Food Processing"
    },
    date:{
        type:Date,
        default:Date.now()
    },
    payment:{
        type:Boolean,
        default:false
    }
})

export const placeOrderModel = mongoose.model("placeOrderModel",OrderSchema)