import React from 'react';
import Nome from './componentes/Nome'
import Email from './componentes/email'
import Cpf from './componentes/cpf'
import Endereço from './componentes/endereço'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      nome:'',
      email:'',
      cpf:'',
      endereço:''
    }
  }

  toUppercase(event) {
    const {}
  }

  handleChange(event) {
    const { value, name } = event.target
    this.setState({[name]:value})
  }

  render() {
    const { nome, email, cpf, endereço } = this.state
    return (
      <form>
        <fieldset>
            <Nome value={nome} handleChange={ this.handleChange }/>
            <Email value={email}handleChange={ this.handleChange }/>
            <Cpf value={cpf} handleChange={ this.handleChange }/>
            <Endereço value={endereço} handleChange={ this.handleChange }/>
            {/* <label>Email</label>
            <input name="cidade" type="text"></input>
            <label>Email</label>
            <input name="email" type=""></input>
            <label>Email</label>
            <input name="email" type="radio"></input> */}
        </fieldset>
      </form>

    )
  }
}

export default Form;
