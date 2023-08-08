const initialState = {
  ten: false,
  onlin: false,
  ofline: false
};

export const Reduser =(state=initialState, action) => {
  switch (action.type) {
    case "TEN":
      return { ...state, ten: action.payload };
      case 'OFLINE':
        return {...state, ofline: action.payload};
        case 'ONLINE':
        return {...state, onlin: action.payload};
    default:
      return state;
  }
};
