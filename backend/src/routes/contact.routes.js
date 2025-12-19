import express from 'express'
import { Contact } from '../models/Contact.model.js';

const router = express.Router();

router.post('/new', async (req, res) => {

    try {
        const { fullName, email, mobileNumber, city } = req.body;

        if (!fullName || !email || !mobileNumber || !city) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const user = await Contact.create({
            fullName,
            email,
            mobileNumber,
            city
        });

        return res.status(201).json({
            message: 'User added successfully',
            user
        });

    } 
    catch (error) {
        return res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
});

router.get('/', async (req, res)=>{
    try{
        const users = await Contact.find();

        return res.status(200).json({
            message: "Users fetched successfully.",
            users
        })
    } 
    catch(error){
        return res.status(500).json({
            message: 'Server error',
            error: error.message
        })
    }
})

export default router