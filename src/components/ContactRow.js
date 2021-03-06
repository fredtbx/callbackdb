import React, { Component } from 'react';

class ContactRow extends Component {
  render() {
    const {c_id, c_name, c_company,c_phone, c_email, c_method, 
            c_priority, c_notes, c_next_contact_date, c_date_created} = this.props.contact;
    // console.log(contact);
    let shortNotes = c_notes.substring(0,15);
    return (
        <tr>
          <td>{c_name}</td>
          <td>{c_company}</td>
          <td>{c_phone}</td>
          <td>{c_email}</td>
          <td>{c_method}</td>
          <td>{c_priority}</td>
          <td>
            {shortNotes}...
          </td>
          <td>{c_next_contact_date}</td>
          <td>{c_date_created}</td>
          <td><button onClick={() => this.props.changeAppMode('readOne', c_id)}>Read</button></td>
          <td><button onClick={() => this.props.changeAppMode('update', c_id)}>Edit</button></td>
          <td><button onClick={() => this.props.changeAppMode('delete', c_id)}>Delete</button></td>  
        </tr>
    );         
  }
};

export default ContactRow;