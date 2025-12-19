import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
    {
        fullName : {
            type: String,
            required: true,
        },
        email: { 
            type: String, 
            required: true, 
            trim: true,
            lowercase: true 
        },
        mobileNumber : {
            type: String,
            required: true,
        },
        city : {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

export const Contact = mongoose.model("Contact", contactSchema) 