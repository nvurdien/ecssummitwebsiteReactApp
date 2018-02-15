import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Contact from '../contact'
import GetInvolved from '../getinvolved'
import { history } from '../../store'

const App = () => (
    <div>
        <main>
            <Route exact path="/" onUpdate={() => window.scrollTo(0, 0)} history={history} component={Home} />
            <Route exact path="/about" onUpdate={() => window.scrollTo(0, 0)} history={history} component={About} />
            <Route exact path="/contact" onUpdate={() => window.scrollTo(0, 0)} history={history} component={Contact}/>
            <Route exact path="/getinvolved" component={GetInvolved}/>
        </main>
    </div>
);
export default App;