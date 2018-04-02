import * as React from 'react';
import { ContactDetailModule } from '../../modules/ContactDetail';

export interface IProps {
  match: {
    params: { contactId: string };
  };
}

const ContactPage = ({ match: { params } }: IProps) => (
  <div>
    <ContactDetailModule contactId={params.contactId} />
  </div>
);

export default ContactPage;
