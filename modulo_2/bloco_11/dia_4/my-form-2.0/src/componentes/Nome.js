import React from 'react';

class Nome extends React.Component {
  render() {

    const { handleChange, value } = this.props

    let error = undefined
    if(value.length > 40) error = "maximo 40 palavras"

    return (
      <label for="nome">Nome:
      <input className='nome' name="nome" onChange={handleChange} type="text" id="nome"></input>
      <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Nome;