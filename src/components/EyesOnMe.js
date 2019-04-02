// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

  handleBlur = () => { console.log('Hey! Eyes on me!')}
  focusHandler = () => { console.log('Good!')}
  
  render() {
    return(
      <button onBlur={this.handleBlur} onFocus={this.focusHandler}>Press Me</button>
    )
  }
}