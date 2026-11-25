import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderForm from "./pages/OrderForm";
import Success from "./pages/Success";

export default function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/order">
        <OrderForm setOrderData={setOrderData} />
      </Route>
      <Route path="/success">
        <Success orderData={orderData} />
      </Route>
    </Switch>
  );
}