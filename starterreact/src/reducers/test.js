
const defaultState = ['YOUHOU', 'YAHA'];

const testing = (state = defaultState, action) => {
  
  switch(action.type){
    case 'ADD_ELEMENT':
      const copy = [...state];
      copy.push(action.element);
      return copy;
    default:
      return state;

  }

}

export default testing;