import data from './data.js'
import React from 'react';
import './App.css';

class List extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (<div className='poke'>
    {data.map(({name, type, averageWeight:{measurementUnit, value}, image}) => <div className='ximira' key={name} > 
      <div className='pokem'>{name}</div>
      <div className='pokem'>{type}</div>
      <div className='pokem'>{value} {measurementUnit}</div>
      <img className='pokem' src={image} alt={name}></img>
      </div>)}
    </div> 
    )}
}

export default List;