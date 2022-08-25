const INITIAl_STATE = {
  email: "",
  password: "",
};

const loginReducer = (state = INITIAl_STATE, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    default:
      return state;
  }
};

export default loginReducer;
