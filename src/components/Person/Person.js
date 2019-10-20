import React, { Component } from 'react'
import classes from './Person.css'
 class Person extends Component {
    render() {
        return (
            <div className="Person" onClick={(event)=>this.props.clicked(event)}>
              <p>{this.props.name}</p>  
              <p>{this.props.age}</p>   
            </div>
        )
    }
}

export default Person