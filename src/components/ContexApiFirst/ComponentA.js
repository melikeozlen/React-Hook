import React, { Component } from 'react'
import ComponentB from './ComponentB'

export default class ComponentA extends Component {
  render() {
    return (
      <div>
      <h4>Component A</h4>
      <ComponentB/>
      </div>
    )
  }
}
