import { Newsletter } from "../models/Newsletter.model.js";

export const addNewsletter = async (req, res) => {

    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: 'Email is required'
            });
        }

        const existingEmail = await Newsletter.findOne({ email });

        if (existingEmail) {
            return res.status(409).json({
                message: 'Email already subscribed'
            });
        }

        const subscription = await Newsletter.create({ email });

        return res.status(201).json({
            message: 'Subscribed successfully',
            subscription
        });

    } 
    catch (error) {
        return res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
}


export const getNewsletter = async (req, res)=>{
    try {
        const subscriptions = await Newsletter.find();

        return res.status(200).json({
            message: 'Subscribed emails fetched successfully',
            subscriptions
        });

    } 
    catch (error) {
        return res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
}