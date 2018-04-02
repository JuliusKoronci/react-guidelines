import * as React from 'react';
import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import { IStoreState } from '../../../@types/state';
import ContactTable from '../../../components/templates/ContactTable/ContactTable';
import { contactActions, selectContactData } from '../../../data/contact';

export interface IProps {
  loadContacts: () => Action;
  contactData: Contacts;
}

export class ContactListContainer extends React.PureComponent<IProps, {}> {
  public componentDidMount() {
    this.props.loadContacts();
  }

  public render() {
    return <ContactTable contacts={this.props.contactData} />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) =>
  bindActionCreators(
    {
      ...contactActions,
    },
    dispatch,
  );

const mapStateToProps = (state: IStoreState) => ({
  contactData: selectContactData(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ContactListContainer,
);
