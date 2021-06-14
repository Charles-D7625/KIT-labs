import React from 'react'
import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import listPage from './pages/listPage'

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/friend.list' component={listPage} />
    </Switch>
)

export default Router;