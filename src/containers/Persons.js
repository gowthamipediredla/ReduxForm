import React, { Component } from 'react'
import AddPerson from '../components/AddPerson/AddPerson'
import Person from '../components/Person/Person'
import {connect} from 'react-redux'
 class Persons extends Component {
state={
    person:[{id:1,name:'gow',age:21}]
}

    // AddPersonHandler=(name,age,e)=>{
    //    e.preventDefault()
    //     let per={
    //         id:Math.random(),
    //         name:name,
    //         age:age
    //     }
    //     let persons=Object.assign([],this.props.persn)
    //     const persons1=persons.concat(per)
    //     this.setState(prevState=>prevState.person=persons1)
       

    // }

    deleteHandler=(index,event)=>{
        event.preventDefault()
        let persons=Object.assign([],this.props.persn)
        const per=persons.filter(p=>p.id!==index)
        this.setState({person:per})

    }
    render() {
        return (
            <div>
               <AddPerson AddPersonHandler={this.props.onAddPersonHandler}/> 
               {this.props.persn.map(pr=><Person key={pr.id} name={pr.name} age={pr.age} clicked={this.props.onDeleteHandler.bind(this,pr.id)}></Person>)}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        persn:state.persons
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onAddPersonHandler:(name,age)=>dispatch({type:'ADD',persond:{name:name,age:age}}),
        onDeleteHandler:(id)=>dispatch({type:'DELETE',id:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons)