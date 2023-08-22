function compute(state, action){
  switch(action.type){
    case 'increment' :{
      
      return {...state, count:state.count + 1}
    }
    case 'decrement': {
      return {...state, count:state.count - 0}
    }

    case 'incrementBy' :{
      return{...state, count:state.count + action.payload} 
    }

    case 'decrementBy' : {
      return  {...state, count:state.count - action.payload} 
    }

    default :{
      return {...state}
    }
  }

}

console.log(compute({count:0}, {type:'increment'})); // {count:1}
console.log(compute({count:10}, {type:'decrement'})); // {count:9}
console.log(compute({count:10}, {type:'incrementBy', payload:5})); // {count:15}
console.log(compute({count:12}, {type:'decrementBy', payload:3})); // {count:9}
