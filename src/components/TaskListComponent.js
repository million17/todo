import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import TaskItemComponent from './TaskItemComponent';

class TaskListComponent extends Component {
    render() {
        return (
            <FlatList
                data={this.props.tasks}>
                renderItem={({item, index}) => {
                return (
                    <TaskItemComponent {...item}>

                    </TaskItemComponent>
                );
            }}

            </FlatList>
        );
    }
}

export default TaskListComponent;
