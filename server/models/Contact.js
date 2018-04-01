const contacts = require('../db/data');

/**
 * Singleton contact to simulate DB model
 */
class Contact {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    /**
     * Get all contacts from database
     *
     * @returns {[{id: number, first_name: string, last_name: string, email: string, website: string}...]}
     */
    getContacts() {
        return this.dataSource;
    };

    /**
     * Find a contact by id
     *
     * @param {int} id contact id
     * @returns {{id: number, first_name: string, last_name: string, email: string, website: string}}
     */
    getContact(id) {
        return this.dataSource.find(contact => contact.id === id);
    }

    /**
     * Add a new contact to the database, creates an Id automatically
     *
     * @param {{id: number, first_name: string, last_name: string, email: string, website: string}} contact
     */
    createContact(contact) {
        this.dataSource.push({
            ...contact,
            id: this.dataSource.length + 2,
        });
    }

    /**
     * Update an existing contact
     *
     * @param {number} id contact id
     * @param {{first_name?: string, last_name?: string, email?: string, website?: string}} partialContact part or
     *     entire contact changes
     */
    updateContact(id, partialContact) {
        this.dataSource = this.dataSource.map((contact) => {
            if (contact.id === id) {
                return {
                    contact,
                    partialContact,
                    id,
                }
            }
            return contact;
        });
    }

    /**
     * Delete a contact from database
     * @param {number} id contact id
     */
    deleteContact(id) {
        this.dataSource = this.dataSource.filter(contact => contact.id !== id);
    }
}

module.exports = new Contact(contacts);
