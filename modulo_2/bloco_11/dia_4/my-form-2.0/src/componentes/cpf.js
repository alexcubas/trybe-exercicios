import React from 'react';

class Cpf extends React.Component {
  render() {
    const { handleChange } = this.props
    return (
      <div>
        <label for="cpf">CPF: </label>
        <input name="cpf" onChange={handleChange} type="text" id="cpf"></input>
      </div>
    )
  }
}

export default Cpf;