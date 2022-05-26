import React, { Component } from 'react'
import { newContex } from '../ContexApi/NewContex'
export default class ComponentC extends Component {
    render() {
        return (
            <div>
                <h4>ComponentC</h4>
                <newContex.Consumer>
                    {
                        bilgi =>{
                            return <p>{bilgi}</p>
                        }
                    }
                </newContex.Consumer>
            </div>
        )
    }
}
