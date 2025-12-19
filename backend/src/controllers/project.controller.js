import { Project } from "../models/Project.model.js";

export const addProject = async (req, res) => {

    try {
        const { image, name, description } = req.body;

        if (!image || !name || !description) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const project = await Project.create({
            image,
            name,
            description
        });

        return res.status(201).json({
            message: 'Project added successfully',
            project
        });

    } 
    catch (error) {
        return res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};

export const getProjects = async (req, res)=>{
    try{
        const projects = await Project.find();

        return res.status(200).json({
            message: "Projects fetched successfully.",
            projects
        })
    } 
    catch(error){
        return res.status(500).json({
            message: 'Server error',
            error: error.message
        })
    }
};