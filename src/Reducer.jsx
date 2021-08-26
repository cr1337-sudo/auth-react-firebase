export const initialState = {
  isOpen: false,
  user: null
};

export const actionTypes = {
  TOGGLE_MENU: "TOGGLE_MENU",
  SET_USER: "SET_USER"
};

//Escucha si en algun punto se han inyectado datos
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user : action.user
      }
    default:
      return state;
  }
};

export default reducer;
