const initstate={
  persons:[]  
}

const reducer=(state=initstate,action)=>{
 switch(action.type){
     case 'ADD':
         console.log(action.persond)
         return{
                ...state,
                persons:state.persons.concat({id:Math.random(),name:action.persond.name,age:action.persond.age})
         }
     case 'DELETE':
                return{
                   ...state,
                   persons:state.persons.filter(pr=>action.id!==pr.id) 
                }
               
 }
 return state
}

export default reducer