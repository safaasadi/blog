import React from 'react'
import Home from './home'
import history from '../history'
import { Router, Route, Switch } from 'react-router-dom'
import Navbar from './navbar'
import Login from './login'
import Register from './register'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Navbar />
                <main className="py-4">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/register' exact component={Register} />
                    </Switch>
                </main>
            </Router>
        </div>
    )
}

export default App