const Contact = require('../models/Contact');
const routeTools = require('../tools/routeTools');
const apiTools = require('../tools/apiTools');

exports.getContacts = (req, res) => {
    const contacts = Contact.getContacts();

    if (contacts.length === 0) {
        return apiTools.apiError(res, 404, 'No contacts found!');
    }
    res.json(contacts);
};
exports.getContact = (req, res) => {
    const contact = Contact.getContact(routeTools.getId(req));
    if (!contact) {
        return apiTools.apiError(res, 404, 'Contact not found!');
    }
    res.json(contact);
};

exports.updateContact = (req, res) => {
    const contactId = routeTools.getId(req);
    const contactUpdates = Object.keys(req.body).reduce((all, nextKey) => {
        all[nextKey] = req.body[nextKey];

        return all;
    }, {});

    Contact.updateContact(contactId, contactUpdates);

    res.status(202).json(Contact.getContacts());
};

exports.createContact = (req, res) => {
    const newContactData = Object.keys(req.body).reduce((all, nextKey) => {
        all[nextKey] = req.body[nextKey];

        return all;
    }, {});
    Contact.createContact(newContactData);
    res.status(201).json(Contact.getContacts());
};

exports.deleteContact = (req, res) => {
    Contact.deleteContact(routeTools.getId(req));

    res.status(202).json(Contact.getContacts());
};

