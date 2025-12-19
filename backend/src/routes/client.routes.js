import express from 'express'
import { Client } from '../models/Client.model.js';

const router = express.Router();

router.post('/new', async (req, res) => {

    try {
        const { image, name, description, designation } = req.body;

        if (!image || !name || !description || !designation) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const client = await Client.create({
            image,
            name,
            description,
            designation
        });

        return res.status(201).json({
            message: 'Client added successfully',
            client
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
        const clients = await Client.find();

        return res.status(200).json({
            message: "Clients fetched successfully.",
            clients
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