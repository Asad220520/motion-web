const initialState = {
  ten: false,
};

export const Reduser = (state = initialState, action) => {
  switch (action.type) {
    case "TEN":
      return { ...state, ten: action.payload };

    default:
      return state;
  }
};
