import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class TaskItemComponent extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        //Call is the container
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}>

                </TouchableOpacity>
                <Text style={{
                    flex: 1,
                    color: this.props.completed == true ? 'darkgreen' : 'black',
                }}>
                    {this.props.taskName}
                </Text>
            </View>
        );
    }
}

export default TaskItemComponent;
