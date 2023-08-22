function reducer(state,action){

  switch (action.type){
    case 'ADD_USER' : {
      return {...state, users:[...state.users, action.payload]}
    }
    case "REMOVE_USER" : {
      return {...state, users:state.users.filter((ele) => {return ele.id !== action.payload.id})}
    }
  }

}

console.log(reducer({users:[]}, {type: "ADD_USER", payload:{id:1, name:'steve'}}));
console.log(reducer({users:[{id:1, name:'steve'},{id:2, name:'jobs'}]}, {type:'REMOVE_USER', payload:{id:1}}));