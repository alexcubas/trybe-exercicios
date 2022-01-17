import React from 'react';

class Endereço extends React.Component {
  render() {
    const { handleChange } = this.props
    return (
      <div>
          <label for="endereço">endereço: </label>
          <input name="endereço" onChange={handleChange} type="text" id="endereço"></input>
      </div>
    )
  }
}

export default Endereço;