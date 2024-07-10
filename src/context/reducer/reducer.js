export const initialState = {
  post: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "POST":
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
