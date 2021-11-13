import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import NavMenu from './components/NavMenu';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Page404 from './pages/Page404';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavMenu />
                <main>
                    <Switch>
                        <Route path="/" exact> 
                        {/* exact nie podpowiada nam wtedy innych ścieżek przez Switcha */}
                            <Home />
                        </Route>
                        <Route path="/contact" exact>
                            <Contact />
                        </Route>
                        <Route path="*">
                            <Page404 />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;