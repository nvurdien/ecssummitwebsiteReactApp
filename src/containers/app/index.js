import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Contact from '../contact'
import GetInvolved from '../getinvolved'

const App = () => (
    <div>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/getinvolved" component={GetInvolved}/>
        </main>
    </div>
)
export default App;