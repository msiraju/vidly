import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/common/protectedRoute";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import Register from "./components/register";
import LogOut from "./components/logOut";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    console.log("reloaded");
    const user = auth.getCurrentUser();
    if (user) this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/logout" exact component={LogOut} />
            <Route path="/login" exact component={LoginForm} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/customers" component={Customers} />
            <Route path="/Rentals" component={Rentals} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={user} />}
            />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
