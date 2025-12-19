import express from 'express'
import { addProject, getProjects } from '../controllers/project.controller.js';

const router = express.Router();

router.post('/', addProject);

router.get('/', getProjects)

export default router