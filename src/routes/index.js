import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../../App.js';

const routesGroup = [
    <IndexRoute component={}></IndexRoute>,
];

module.exports =
    <Route path='/' component={App}>
        {routesGroup}
    </Route>;
