import mongoose from "mongoose";

const InformationSchema=new mongoose.Schema({
    myName:{
        type:String,
        trim:true
    },
    age:{
        type:String,
        trim:true
    },
    birthDate:{
        type:String,
        trim:true
    },
    country:{
        type:String,
        trim:true
    },
    location:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    maritalStatus:{
        type:String,
        trim:true
    },
    personalPhoto:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true
    },
    phoneNumber:{
        type:String,
        trim:true,
    },
    LinkedIn:{
        type:String,
        trim:true,
    },
    Facebook:{
        type:String,
        trim:true,
    },
    github:{
        type:String,
        trim:true,
    },
    heroFirstPhrase:{
        type:String,
        trim:true
    },
    heroSecondPhrase:{
        type:String,
        trim:true
    },
    education: [
        {
            university: {
                type: String,
                trim:true
            },
            degree: {
                type: String,
                trim:true
            },
            specialist: {
                type: String,
                trim:true
            },
            grade: {
                type: String,
                trim:true
            },
            startDate: {
                type: String,
                trim:true
            },
            endDate: {
                type: String,
                trim:true
            }
        }
    ],
    experience:{
        type:String,
        trim:true
    },
    cv:{
        type:String,
        trim:true
    },
    skills:{
        type:[String],
        trim:true,
        default:[]
    }
})

const Information=mongoose.model('Information',InformationSchema,'informations')

export default Information