import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Committee from '../committee'
import GetInvolved from '../getinvolved'
import Contact from "../contactUs";

const App = () => (
    <div>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/getinvolved" component={GetInvolved}/>
            <Route exact path="/committee"  component={Committee}/>
        </main>
    </div>
);
export default App;