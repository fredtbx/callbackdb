import React, { Component } from 'react';
import ContactRow from './ContactRow';

class ContactTable extends Component {
  render() {
    const rows = this.props.contacts.map(function (contact, index) {
      return (
        <ContactRow
          key={index}
          contact={contact}
          changeAppMode={this.props.changeAppMode}
        />
      );
  }.bind(this));
    
      return(
        rows.length
          ? <table className='table table-bordered table-hover'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Method</th>
                <th>Priority</th>
                <th>Notes</th>
                <th>Next Contact</th>
                <th>Created Date</th>
                <th colSpan="3">Actions</th>
              </tr>
            </thead>
          <tbody>
            {rows}
          </tbody>
      </table>     
      :
      <div className='alert alert-danger'>No Contacts found.</div>     
    );
  }
}

export default ContactTable;