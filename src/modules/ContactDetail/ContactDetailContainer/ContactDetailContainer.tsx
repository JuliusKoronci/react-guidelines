import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IStoreState } from '../../../@types/state';
import { selectSingleContact } from '../../../data/contact';
import { ContactDetail } from '../../../components';

interface IProps {
  contactId: string;
  dispatch: Dispatch<IStoreState>;
  selectedContact: IContact;
}

class ContactDetailContainer extends React.PureComponent<IProps> {
  public render() {
    if (!this.props.selectedContact) {
      return null;
    }
    return (
      <div>
        <ContactDetail contact={this.props.selectedContact} />
      </div>
    );
  }
}

const mapStateToProps = (
  state: IStoreState,
  ownProps: { contactId: string },
) => ({
  selectedContact: selectSingleContact(ownProps.contactId)(state),
});

export default connect(mapStateToProps)(ContactDetailContainer);
