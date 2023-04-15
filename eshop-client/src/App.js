import "./App.css";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./stripe demo/Pay";
import Success from "./stripe demo/Success";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

function App() {
    const user = true;
    return (
        <>
            {/* <Router>
                <Switch>
                    <Route path="/pay">
                        <Pay />
                    </Route>
                    <Route path="/success">
                        <Success />
                    </Route>
                </Switch>
            </Router> */}

            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/products/:category">
                        <ProductList />
                    </Route>
                    <Route path="/product/:id">
                        <Product />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
                    <Route path="/register">
                        <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
