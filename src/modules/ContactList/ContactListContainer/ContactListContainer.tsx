import * as React from 'react';
import { connect } from 'react-redux';
import { Action, bindActionCreators } from 'redux';
import { contactActions } from '../../../data/contact';

export interface IProps {
  loadContacts: () => Action;
}

export class ContactListContainer extends React.PureComponent<IProps, {}> {
  public componentDidMount() {
    this.props.loadContacts();
  }

  public render() {
    return <div>Test api request</div>;
  }
}

export default connect(null, dispatch =>
  bindActionCreators(
    {
      ...contactActions,
    },
    dispatch,
  ),
)(ContactListContainer);
