import express from 'express'
import { addContact, getContact } from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/', addContact);

router.get('/', getContact)

export default router