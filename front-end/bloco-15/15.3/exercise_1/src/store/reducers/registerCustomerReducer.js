const INITIAL_STATE = {
  customers: [],
};

const registerCustomerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REGISTER_CUSTOMER":
      return {
        ...state,
        customers: [...state.customers, action.customer],
      };
    case "DELETE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.email !== action.customer.email
        ),
      };
    default:
      return state;
  }
};

export default registerCustomerReducer;
