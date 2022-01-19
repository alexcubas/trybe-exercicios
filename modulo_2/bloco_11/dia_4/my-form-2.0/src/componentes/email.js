import React from 'react';

class Email extends React.Component {
  render() {
    const { handleChange } = this.props
    return (
      <div>
        <label for="email">Email: </label>
        <input name="email" onChange={handleChange} type="text" id="email"></input>
      </div>
    )
  }
}

export default Email;