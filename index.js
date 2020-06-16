/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

//Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './src/reducers';
import TaskManagerComponent from './src/components/TaskManagerComponent';


let store = createStore(allReducers);
const App = () => (
    <Provider store={store}>
        <TaskManagerComponent/>
    </Provider>
);
AppRegistry.registerComponent('Todo', () => App);

