let initialState = [];

export function items(state = initialState, action) {
  let newState = [...state];

  switch (action.type) {
    
    case 'ADD':
      newState.push({text: action.text, numb: newState.length + 1});
      return newState;

    case 'DELETE':
      newState.pop();
      return newState;

    default:
      return state;
  }
}

// import complexData from './complex.js';
let complexData = 'complex data';
export function complex(state = complexData, action) {
  let newState = {...state};

  switch (action.type) {
  
    case 'GETDATA':
      console.log(newState)
      return newState;

    default:
      return state;
  }
}