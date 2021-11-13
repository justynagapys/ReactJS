import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Contact from './pages/Contact';
import Home from './pages/Home';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav></nav>
                <main>
                    <Switch>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;