import React, { Component } from 'react';
import './App.css';
import ReadOneContact from './components/ReadOneContact';
import NewContactForm from './components/NewContactForm';
import ReadContacts from './components/ReadContacts';
import UpdateContact from './components/UpdateContact';

class App extends Component {  
  constructor(props) {
    super(props)
    this.state= {
      currentMode: 'read',
      c_id: null
    }
  }

  changeAppMode = (newMode, c_id) => {
    this.setState({currentMode: newMode});
    if (c_id !== undefined) {
      this.setState({ c_id: c_id});
    }
  }

  render() {
    let modeComponent = <ReadContacts changeAppMode={this.changeAppMode} />

      switch(this.state.currentMode) {
        case 'read':
            break;
        case 'readOne':
            modeComponent = <ReadOneContact c_id={this.state.c_id} changeAppMode={this.changeAppMode}/>;
            break;
        case 'create':
            modeComponent = <NewContactForm handleSubmit = {this.handleSubmit} changeAppMode={this.changeAppMode}/>;
            break;
        case 'update':
            modeComponent = <UpdateContact handleSubmit = {this.handleSubmit} c_id={this.state.c_id} changeAppMode={this.changeAppMode}/>;
            break;
        case 'delete':
            //modeComponent = <DeleteContact c_id={this.state.c_id} changeAppMode={this.changeAppMode}/>;
            break;
        default:
            break;
      }
      return modeComponent;
    }    
  };
  

export default App;
