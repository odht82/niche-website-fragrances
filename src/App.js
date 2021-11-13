import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';
import AuthProvider from "./contexts/AuthProvider";
import Home from './Components/Pages/HomePage/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import Orders from './Components/Pages/Orders/Orders';
import Products from "./Components/Pages/Products/Products";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components/Pages/Login/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          {/* <Navbar></Navbar> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/log-in">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
      </AuthProvider>
    </>

  );
}

export default App;





            // <PrivateRoute path="/products/details/:productId">
            //   <Details></Details>
            // </PrivateRoute>


            // <PrivateRoute path="/services/details/:serviceId">
            //   <Details></Details>
            // </PrivateRoute>


            // <PrivateRoute path="/home-service/details/:homeServiceId">
            //   <Details></Details>
            // </PrivateRoute>


            // <PrivateRoute path="/doctors/details/:doctorId">
            //   <Details></Details>
            // </PrivateRoute>