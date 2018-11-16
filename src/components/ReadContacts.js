import React, { Component } from 'react';
import TopActions from './TopActions';
//import ContactTable from './ContactTable';
import Search from './Search';

// component that contains all the logic and other smaller components
// that form the Read Products view
class ReadContacts extends Component {
  state = {
    contacts: []
  }

  // on mount, fetch all products and stored them as this component's state
  componentDidMount() {
    fetch("http://localhost/callbackdb_api/contacts/read.php")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
          contacts: responseJson.records
        }, function() {
  
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // handleSubmit = contact => {
  //   this.setState({ contacts: [...this.state.contacts, contact]})
  // }

  removeContact = index => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter((contact, i) => {
        return i !== index;
      })
    });
  }
  
  render() {
    const contactData = this.state.contacts;
    document.querySelector("div > h1").textContent = 'List all Contacts'

    return (      
      <div className='overflow-hidden'>
        <TopActions changeAppMode={this.props.changeAppMode} /> 
        <Search contacts={contactData} changeAppMode={this.props.changeAppMode} />       
        
        
      </div>
    );
  }
}

export default ReadContacts;

// <ContactTable 
//           contacts={contactData}
//           changeAppMode={this.props.changeAppMode}
//         />