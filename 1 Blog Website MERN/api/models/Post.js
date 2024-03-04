import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    tittle:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:false,
    },
    username:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        required:false,
    }
},
    {timestamps:true}    
);

export default model("Post", PostSchema);