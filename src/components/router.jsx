import React from 'react'
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import MovieDetail from './movieDetail';
import MovieList from './movieList';

function Routes() {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path='/' exact component={MovieList} />
                    <Route path='/show/:id' component={MovieDetail} />
                </Switch>
            </Router>
            
        </div>
    )
}

export default Routes
