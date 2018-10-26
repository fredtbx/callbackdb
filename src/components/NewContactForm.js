import React, { Component } from 'react';
import { Form, FormGroup, Col, Input } from 'reactstrap';

class NewContactForm extends Component {
  constructor(props) {
    super(props)
      this.initialState = {
        c_name: '',
        c_company: '',
        c_phone: '',
        c_email: '',
        c_method: '',
        c_priority: '',
        c_notes: '',
        c_next_contact_date: '',
        c_date_created: ''
      };
      this.state = this.initialState;
  }
 
  submitForm = event => {
    event.preventDefault();
    this.handleSubmit();
    this.setState(this.initialState);
  }

  handleSubmit() {
    const formData = {
      c_name: this.state.c_name,
      c_company: this.state.c_company,
      c_phone: this.state.c_phone,
      c_email: this.state.c_email,
      c_method: this.state.c_method,
      c_priority: this.state.c_priority,
      c_notes: this.state.c_notes,
      c_next_contact_date: this.state.c_next_contact_date,
      c_date_created: this.state.c_date_created
    }

    fetch('http://localhost/callbackdb_api/contacts/create.php', {
      method: 'POST',
      mode: 'cors',      
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .catch(err => err)
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  }

  render() {
    const {c_name, c_company, c_phone, c_email, c_method, c_priority, c_notes, c_next_contact_date} = this.state;
    document.querySelector("div > h1").textContent = 'Create a new contact';
    return(
      <div>
      <a href='#' className='btn btn-primary margin-bottom-1em' onClick={() => this.props.changeAppMode('read')}> 
        Read Contacts
      </a>
        <Form onSubmit={this.handleSubmit}>          
          <FormGroup>
            <Col>
              <label htmlFor="c_name">Contact Name:</label>            
              <input type="text" name="c_name" id="c_name" value={c_name} onChange={this.handleChange} placeholder="Contact Name" />
            </Col>
            </FormGroup>
          <FormGroup>
            <Col>
              <label htmlFor="c_company">Company:</label>            
              <input type="text" name="c_company" id="c_company" value={c_company} onChange={this.handleChange} placeholder="Company" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>           
              <label htmlFor="c_phone">Phone:</label>
              <input type="text" name="c_phone" id="c_phone" value={c_phone} onChange={this.handleChange} placeholder="Phone" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <label htmlFor="c_email">Email:</label>
              <input type="text" name="c_email" id="c_email" value={c_email} onChange={this.handleChange} placeholder="Email" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <label htmlFor="c_method">Contact Method:</label>
              <input type="text" name="c_method" id="c_method" value={c_method} onChange={this.handleChange} placeholder="Contact Method" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <label htmlFor="c_name">Priority:</label>
              <Input type="select" name="c_priority" id="c_priority" value={c_priority} onChange={this.handleChange} placeholder="Priority">
              <option>1</option>
              <option>2</option>
              <option selected>3</option>
              <option>4</option>
              <option>5</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <label htmlFor="c_next_contact_date">Next Contact Date:</label>
              <input type="date" name="c_next_contact_date" id="c_next_contact_date" value={c_next_contact_date} onChange={this.handleChange} placeholder="Next Contact Date" />
            </Col>
          </FormGroup>
          <FormGroup>
          <Col>
            <label htmlFor="c_notes">Notes:</label>
            <textarea name="c_notes" id="c_notes" value={c_notes} onChange={this.handleChange} placeholder="Notes" />
          </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <button className='btn btn-primary' onClick={this.submitForm}>
                Save
              </button>
            </Col>
          </FormGroup>
        </Form> 
      </div>
    );
  }
}

export default NewContactForm;