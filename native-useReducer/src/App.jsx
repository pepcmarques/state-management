import { useReducer } from "react";

function UserForm() {
  const [state, dispatch] = useReducer((state, action) => ({
    ...state,
    ...action,
  }), {
    firstName: "", 
    lastName: "",
  });

  return (
    <div>
      <div>
        <input type="text" value={state.firstName} onChange={(e) => dispatch({firstName: e.target.value})} />
        <input type="text" value={state.lastName} onChange={(e) => dispatch({lastName: e.target.value})}/>
      </div>
      <div>
        First = {state.firstName}
        <br />
        Last  = {state.lastName}
      </div>
    </div>
  )
}

function NameList() {
  const [state, dispatch ] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return { ...state, names: [ ...state.names, state.name], name:""};
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
      <div className="App">
        <div>{state.names.map((name, index) => (<div key={index}>{name}</div>))}</div>
        <div>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
          <button onClick={(e) => 
            dispatch({ type: "ADD_NAME" })
          }>Add Name</button>
        </div>
        <div>
          Name: {state.name}
        </div>
      </div>
  );
}


function App() {
  return (
    <div>
      <UserForm />
      <NameList />
    </div>
  )
}

export default App;
