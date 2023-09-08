import { useReducer, createContext } from "react";
import FormComp from "./FormComp";
import DisplayComp from "./DisplayComp"
import MessageComp from "./MessageComp";

export const UserContext = createContext()

function reducer(state, action){
  switch (action.type){
    case "FETCH_USER" : {
      return {...state, user:action.payload, id:action.payload.id, notice:"",errors:""}
    }
    case "EDIT_USER": {
      return {...state, isEdit:!state.isEdit, user:action.payload}
    }
    case "DELETE_USER":{
      if(action.payload.notice){
        return {...state, notice:action.payload.notice, id:'',errors:""}
      }
    }
    case "ERROR": {
      return {...state, errors:action.payload, notice:"", id:""}
    }
  }
}

const App = (props) => {
    const initialState = {
        user: {},
        id:'',
        isEdit:false,
        notice:'',
        errors:''
      }
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state.notice, state.errors);

      return (
        <UserContext.Provider value={{state, dispatch}}>
          <FormComp/>
          <MessageComp/>
          {state.id && <DisplayComp/>}
        </UserContext.Provider>
      )
}

export default App;
