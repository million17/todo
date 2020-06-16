import React, {Component} from 'react';
import {View} from 'react-native';
import {addNewTask} from '../actions';
import {connect} from 'react-redux';
import AddComponent from '../components/AddComponent';


const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName));
        },
    };
};

export default connect(mapDispatchToProps, mapStateToProps)(AddComponent);
