import React, { Component } from 'react';
import ReactToolTip from 'react-tooltip';


class ShowRow extends Component {

  render(){
    const {c_id, c_name, c_recruiter_company, c_company,c_phone, c_email, c_method, 
      c_priority, c_notes, c_next_contact_date, c_date_created} = this.props;
    let shortNotes = c_notes.substring(0,15);
    return (
        <tr>
          <td>{c_name}</td>
          <td>{c_recruiter_company}</td>
          <td>{c_company}</td>
          <td>{c_phone}</td>
          <td>{c_email}</td>
          <td>{c_priority}</td>
          <td>
          <p data-tip={c_notes}><ReactToolTip type="info" delayShow='250' border='true'/>{shortNotes}...</p></td>
          <td>{c_next_contact_date}</td>
          <td>{c_date_created}</td>
          <td><span onClick={() => this.props.changeAppMode('readOne', c_id)}>Read</span></td>          
          <td><span onClick={() => this.props.changeAppMode('update', c_id)}>Edit</span></td>
          <td><span onClick={() => this.props.changeAppMode('delete', c_id)}>Delete</span></td>  
        </tr>    
    )
  }
}

export default ShowRow