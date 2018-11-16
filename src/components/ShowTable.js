import React, { Component } from 'react';
import ShowRow from './ShowRow';

class ShowTable extends Component {
  render() {
    const rows = this.props.contacts.map(function (contact, index) {
      return (
        <ShowRow 
          key={index}
          contact={contact}
          changeAppMode={this.props.changeAppMode}
        />
      );      
    }.bind(this));
    
    return (
      <table>
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
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default ShowTable