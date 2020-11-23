import React, {Component} from 'react';

class TaskItems extends Component{
    render(){
        const {tasks, buttonfunction } = this.props;
        return (
            <div onClick={() => buttonfunction(tasks)}>
                {tasks}
            </div>
        )
    }
}

export default TaskItems;