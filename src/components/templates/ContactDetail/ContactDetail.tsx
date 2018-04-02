import * as React from 'react';

const ContactDetail = ({ contact }: { contact: IContact }) => (
  <div>
    Details of {contact.first_name} {contact.last_name}
    <p>
      <b>First Name</b>
      : {contact.first_name}
    </p>
    <p>
      <b>Last Name</b>
      : {contact.last_name}
    </p>
    <p>
      <b>Email</b>
      : {contact.email}
    </p>
    <p>
      <b>Website</b>
      : {contact.website}
    </p>
  </div>
);

export default ContactDetail;
