import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Import Components
import Footer from "./components/Footer/Footer";

// Import Pages
import Home from "./pages/Home";

const App = () => (
    <Router>
        <div>
            <Home />
            <Footer />
        </div>
    </Router>
);

export default App;