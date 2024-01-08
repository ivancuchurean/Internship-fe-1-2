import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


import Articles from "./pages/articles";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Articles />} />
                <Route exact path="/articles/:id" element={<Articles />} />
            </Routes>
        </Router>
    );
}
 
export default App;