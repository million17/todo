import React, {Component} from 'react';
import {View, TextInput, TouchableHighlight, Image} from 'react-native';
import {addNewTask} from '../actions';


export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state({
            newTaskName: '',
        });
    }

    render() {
        return (
            <View style={styles.addComponent}>
                <TextInput
                    keyboardType='default'
                    placeholderTextColor='white'
                    onChangeText={
                        (text) => {
                            this.setState({newTaskName: text});
                        }
                    }
                />
                <TouchableHighlight
                    underlayColor='blue'
                    onPress={(event) => {
                        if (!this.state.newTaskName.trim()) {
                            return;
                        }
                        //Call click event function container
                        this.props.onClickAdd(this.state.newTaskName);
                    }}
                >
                    <Image
                        style={{
                            height: 35,
                            width: 35,
                        }}
                        source={require('../icons/add.png')}
                    />

                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    addComponent: {
        backgroundColor: 'tomato',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 65,
    },
});
