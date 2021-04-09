import React from 'react';
import {Layout} from './components/Layout';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import { NavigationBar } from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <Layout>
          <section>
          <header>
            <nav>
              <NavigationBar />
            </nav>
          </header>
          <article>
            <Switch>
              <Route exact path="/" component={Home}/>
              
            </Switch>
          </article>
          <footer style={{}}>
            <p>&copy; 2021 Copyright</p>
          </footer>
          </section>
        </Layout>
      </Router>
  );
}

export default App;
