import React, { Component} from 'react';
import { Form, FormGroup, Col } from 'reactstrap';

class ReadOneContact extends Component {
    constructor(props) {
      super(props)
        this.state = {
          contacts: []
        }
        //this.state = this.initialState;
    }
  
    componentDidMount() {  
      const c_id = this.props.c_id;
      fetch("http://localhost/callbackdb_api/contacts/read_one.php?c_id=" + c_id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
          contacts: responseJson
        }, function() {
          console.log(responseJson)
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
    render() {
      const {c_name, c_company, c_phone, c_email, c_method, c_priority, c_notes, c_next_contact_date} = this.state.contacts;      
      document.querySelector("div > h1").textContent = 'Read One Contact'
      return(
        <div>
        <a href='#' className='btn btn-primary margin-bottom-1em' onClick={() => this.props.changeAppMode('read')}> 
        Read Contacts
        </a>
          <Form>
            <FormGroup>
              <Col>         
                <label htmlFor="c_name">Contact Name:</label>            
                <input type="text" name="c_name" id="c_name" value={c_name} placeholder="Contact Name" />          
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>  
                <label htmlFor="c_company">Company:</label>            
                <input type="text" name="c_company" id="c_company" value={c_company} placeholder="Company" />         
              </Col>
            </FormGroup>              
            <FormGroup>
              <Col>          
                <label htmlFor="c_phone">Phone:</label>
                <input type="text" name="c_phone" id="c_phone" value={c_phone} placeholder="Phone" />
              </Col>
            </FormGroup>
            <FormGroup> 
              <Col>
                <label htmlFor="c_email">Email:</label>
                <input type="text" name="c_email" id="c_email" value={c_email} placeholder="Email" />
              </Col>
            </FormGroup> 
            <FormGroup>
              <Col>
                <label htmlFor="c_method">Contact Method:</label>
                <input type="text" name="c_method" id="c_method" value={c_method} placeholder="Contact Method" />
              </Col>
            </FormGroup> 
            <FormGroup>
              <Col>
                <label htmlFor="c_name">Priority:</label>
                <input type="text" name="c_priority" id="c_priority" value={c_priority} placeholder="Priority" />
              </Col>
            </FormGroup> 
            <FormGroup>
              <Col>
                <label htmlFor="c_next_contact_date">Next Contact Date:</label>
                <input type="date" name="c_next_contact_date" id="c_next_contact_date" value={c_next_contact_date} placeholder="Next Contact Date" />
              </Col>
            </FormGroup> 
            <FormGroup>
              <Col> 
                <label htmlFor="c_notes">Notes:</label>
                <textarea name="c_notes" id="c_notes" value={c_notes} placeholder="Notes" />
              </Col>
            </FormGroup> 
          </Form> 
        </div>
      );
    }
}

export default ReadOneContact;