import React, {Component} from 'react';
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';
import {View, Platform} from 'react-native';

class TaskManagerComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <AddContainer/>
                <TaskListContainer/>
            </View>
        );
    }
}

export default TaskManagerComponent;
