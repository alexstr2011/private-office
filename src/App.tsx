import React from 'react';
import Login from "./pages/login";
import Contacts from "./pages/contacts";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "./components/protected-route";

function App() {
    return (
        <Switch>
            <Route path='/login' exact>
                <Login/>
            </Route>
            <ProtectedRoute path='/' exact>
                <Contacts/>
            </ProtectedRoute>
        </Switch>
    );
}

export default App;
