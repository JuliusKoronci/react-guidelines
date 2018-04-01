const express = require('express');
const router = express.Router();
const ContactController = require('./ContactController');
module.exports = [
    router.get('/', ContactController.getContacts),
    router.post('/', ContactController.createContact),
    router.patch('/:id', ContactController.updateContact),
    router.delete('/:id', ContactController.deleteContact),
];