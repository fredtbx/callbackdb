import React, { Component } from 'react';
import ShowRow from './ShowRow';
//import ShowTable from './ShowTable';

class Search extends Component {
 state = {
   searchTerm: ''
 }
  handleSearchTermChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }
  render(){  
    return (
      <div>
      <header>
        <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placeholder="Search" /> 
      </header>
      <div>
        {this.props.contacts
          .filter(contact => `${contact.c_name} ${contact.c_company} ${contact.c_notes}`.toUpperCase()
          .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map(contact => <ShowRow {...contact} changeAppMode={this.props.changeAppMode} /> )}
          
      </div>
    </div>
    );
  }
}

export default Search;

//.map(contact => `${contact.c_name} ${contact.c_company} ${contact.c_notes}` )}