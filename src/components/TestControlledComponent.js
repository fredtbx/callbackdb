import React from 'react';

class TestControlledComponent {
    state = {
      name: '',
      email: '',
      active: true
    }
  

  render() {
    const {state} = this;
    return (
      <form>
        <label> Name:
          <input type="text" name="username" value={state.name} />
        </label>
        <label> Email:
          <input type="text" name="email" value={state.email} />
        </label>
        <label> Active:
          <input type="checkbox" name="active" value={state.active} />
        </label>
      </form>
    );
  }
}

export default TestControlledComponent;