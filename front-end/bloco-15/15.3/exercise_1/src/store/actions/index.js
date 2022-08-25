export const login = (email, password) => {
  return {
    type: "LOGGED_IN",
    email,
    password,
  };
};

export const addCustomer = (customer) => {
  return {
    type: "REGISTER_CUSTOMER",
    customer,
  };
};

export const deleteCustomer = (customer) => {
  return {
    type: "DELETE_CUSTOMER",
    customer,
  };
};
