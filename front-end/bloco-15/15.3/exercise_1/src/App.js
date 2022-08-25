import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisteredCustomers from "./pages/RegisteredCustomers";
import RegisterCustomer from "./pages/RegisterCustomer";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registered-customers" component={RegisteredCustomers} />
      <Route path="/register-customer" component={RegisterCustomer} />
    </Switch>
  );
}

export default App;
