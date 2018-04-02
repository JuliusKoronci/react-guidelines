import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../app/routes';
import { createPath } from '../../../common/Routing';
import {
  Table,
  TableCell,
  TableCellLeft,
  TableHead,
  TableHeadLeft,
} from './styled';

export interface IProps {
  contacts: Contacts;
}

class ContactTable extends React.PureComponent<IProps> {
  public render() {
    return (
      <Table>
        {this.renderTableHeader()}
        {this.renderTableBody()}
        {this.renderEmptyContacts()}
      </Table>
    );
  }

  private renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <TableHead>ID</TableHead>
          <TableHeadLeft>First name</TableHeadLeft>
          <TableHeadLeft>Last name</TableHeadLeft>
          <TableHeadLeft>Email</TableHeadLeft>
          <TableHeadLeft>Website</TableHeadLeft>
        </tr>
      </thead>
    );
  };

  private renderTableBody = () => {
    return (
      <tbody>
        {this.props.contacts.map(contact => (
          <tr key={contact.id}>
            <TableCell>{contact.id}</TableCell>
            <TableCellLeft>
              <Link to={createPath(routes.contact, { contactId: contact.id })}>
                {contact.first_name}
              </Link>
            </TableCellLeft>
            <TableCellLeft>{contact.last_name}</TableCellLeft>
            <TableCellLeft>{contact.email}</TableCellLeft>
            <TableCellLeft>{contact.website}</TableCellLeft>
          </tr>
        ))}
      </tbody>
    );
  };

  private renderEmptyContacts = () => {
    if (this.props.contacts.length !== 0) {
      return null;
    }
    return (
      <tbody>
        <tr>
          <td colSpan={5}>No contacts!</td>
        </tr>
      </tbody>
    );
  };
}

export default ContactTable;
