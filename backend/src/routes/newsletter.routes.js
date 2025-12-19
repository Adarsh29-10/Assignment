import express from 'express'
import { addNewsletter, getNewsletter } from '../controllers/newsletter.controller.js';

const router = express.Router();

router.post('/', addNewsletter);

router.get('/', getNewsletter);

export default router