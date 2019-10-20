import React, { Component } from 'react'
import classs from './AddPerson.css'
class AddPerson extends Component {
    state={
        name:'',
        age:''
    }

    componentDidMount=()=>{
        this.inp.focus()
    }
    nameChanger=(event)=>{
        event.preventDefault()
       this.setState({
           name:event.target.value
       })
       console.log(this.state.name)
      
    }

    ageChanger=(event)=>{
        event.preventDefault()
        this.setState({
            age:event.target.value
        })
        console.log(this.state.age)
       
     }

    render() {
        return (
            <div className="AddPerson">

               <input className="input" type="text" placeholder="enter your name" onChange={this.nameChanger} ref={(a)=>this.inp=a}/><br/>
               <input className="input" type="number" placeholder="enter your age" onChange={this.ageChanger}/><br/>
               <button className="input" onClick={(event)=>this.props.AddPersonHandler(this.state.name,this.state.age,event)}>Add</button> 
            </div>
        )
    }
}

export default AddPerson