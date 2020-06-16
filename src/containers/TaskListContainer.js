import TaskListComponent from '../components/TaskListComponent';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    // alert(`State send to task list : ${JSON.stringify(state)}`);
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers,
    };
};


const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;
