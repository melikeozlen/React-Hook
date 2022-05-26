import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { oldContex } from '../ContexApi/NewContex'

export default class ComponentB extends Component {
    render() {
        return (
            <div>
                <h4>Component B</h4>
                <oldContex.Consumer>
                {
                    bilgi =>{
                        return <p>{bilgi}</p>
                    }
                }
                </oldContex.Consumer>
            <ComponentC/>
            </div>
        )
    }
}
