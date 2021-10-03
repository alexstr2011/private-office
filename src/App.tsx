import React from 'react';
import Login from "./pages/login";
import Contracts from "./pages/contacts";
import ContactForm from "./components/contact-form";

function App() {
    return (
        <div>
            <Login/>
            <Contracts/>
            <ContactForm/>
        </div>
    );
}

export default App;
