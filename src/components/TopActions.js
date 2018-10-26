import React, { Component } from 'react';

// component that contains the functionalities that appear on top of
// the products table: create product
class TopActionsComponent extends Component {
  
  render(){
    return (
      <div>
        <a href='#'
          onClick={() => this.props.changeAppMode('create')}
          className='btn btn-primary margin-bottom-1em'> Create a Contact
        </a>
      </div>
    );
  }
}

export default TopActionsComponent