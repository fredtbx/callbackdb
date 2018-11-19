import React, { Component } from 'react';
import { Form, FormGroup, Col, Alert } from 'reactstrap';

class UpdateContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      successUpdate: null
    }
}  
  
  componentDidMount() {
    const c_id = this.props.c_id;
    fetch("http://localhost/callbackdb_api/contacts/read_one.php?c_id=" + c_id)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ 
        contacts: responseJson
      }, function() {
      this.setState({ c_id: this.props.c_id });
      this.setState({ c_name: this.state.contacts.c_name });
      this.setState({ c_recruiter_company: this.state.contacts.c_recruiter_company });
      this.setState({ c_company: this.state.contacts.c_company });
      this.setState({ c_phone: this.state.contacts.c_phone });
      this.setState({ c_email: this.state.contacts.c_email });
      this.setState({ c_method: this.state.contacts.c_method });
      this.setState({ c_priority: this.state.contacts.c_priority });
      this.setState({ c_notes: this.state.contacts.c_notes });
      this.setState({ c_next_contact_date: this.state.contacts.c_next_contact_date });  
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  }

  submitForm = event => {
    this.handleSubmit();
    this.setState(this.initialState);
    event.preventDefault();
  }
  
  handleSubmit() {
    const d = new Date();  
    const formData = {
      c_id: this.props.c_id,
      c_name: this.state.c_name,
      c_recruiter_company: this.state.c_recruiter_company,
      c_company: this.state.c_company,
      c_phone: this.state.c_phone,
      c_email: this.state.c_email,
      c_method: this.state.c_method,
      c_priority: this.state.c_priority,
      c_notes: d.toDateString() + " - " + this.state.c_notes,
      c_next_contact_date: this.state.c_next_contact_date
    }

    fetch('http://localhost/callbackdb_api/contacts/update.php', {
      method: 'POST',
      mode: 'cors',      
      body: JSON.stringify(formData)
    })
    .then((res) => { 
      res.json()
    .then((json) => {
        this.setState({
          successUpdate: json.message
        })
    })
    })
    .catch(err => err)
    console.log(JSON.stringify(formData));
  }
  
  render() {
    
    const {c_name, c_recruiter_company, c_company, c_phone, c_email, c_method, c_priority, c_notes, c_next_contact_date} = this.state.contacts;
    document.querySelector("div > h1").textContent = 'Update a contact';
    return(
      <div>
        <a href='#' className='btn btn-primary margin-bottom-1em' onClick={() => this.props.changeAppMode('read')}> 
        Read Contacts
        </a>
        {
          this.state.successUpdate === "Contact was updated" ? 
            <span><Alert color='success'>Contact was updated!</Alert></span>
          : 
          null          
        }
        {
          this.state.successUpdate === "Unable to update contact" ? 
            <span className='alert alert-danger'>Unable to update contact!
          </span> 
          : 
          null          
        }
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col> 
            <label htmlFor="c_name">Contact Name:</label>                   
            <input type="text" name="c_name" id="c_name" defaultValue={c_name} onChange={this.handleChange} placeholder="Contact Name" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col> 
            <label htmlFor="c_recruiter_company">Recruiter Company:</label>                   
            <input type="text" name="c_recruiter_company" id="c_recruiter_company" defaultValue={c_recruiter_company} onChange={this.handleChange} placeholder="Recruiter Company" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col>
            <label htmlFor="c_company">Company:</label>          
            <input type="text" name="c_company" id="c_company" defaultValue={c_company} onChange={this.handleChange} placeholder="Company" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col>            
            <label htmlFor="c_phone">Phone:</label>          
            <input type="text" name="c_phone" id="c_phone" defaultValue={c_phone} onChange={this.handleChange} placeholder="Phone" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col>
            <label htmlFor="c_email">Email:</label>
            <input type="text" name="c_email" id="c_email" defaultValue={c_email} onChange={this.handleChange} placeholder="Email" />
          </Col>
          </FormGroup>
        <FormGroup>
          <Col>
            <label htmlFor="c_method">Contact Method:</label>
            <input type="text" name="c_method" id="c_method" defaultValue={c_method} onChange={this.handleChange} placeholder="Contact Method" />
          </Col>
        </FormGroup>
        <FormGroup>
        <Col>
          <label htmlFor="c_name">Priority:</label>
          <input type="text" name="c_priority" id="c_priority" defaultValue={c_priority} onChange={this.handleChange} placeholder="Priority" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col>
            <label htmlFor="c_next_contact_date">Next Contact Date:</label>
            <input type="date" name="c_next_contact_date" id="c_next_contact_date" defaultValue={c_next_contact_date} onChange={this.handleChange} placeholder="Next Contact Date" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col>
            <label htmlFor="c_notes">Notes:</label>
            <input type="text" name="c_notes" id="c_notes" defaultValue={c_notes} onChange={this.handleChange} placeholder="Notes" />
          </Col>
        </FormGroup>
        <FormGroup>
          <button className='btn btn-primary' onClick={this.submitForm}>
            Save Changes
          </button>
        </FormGroup>
        </Form> 
      </div>
    );
  }
}; //end UpdateContact

export default UpdateContact;