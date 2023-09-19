import styled from "styled-components";
import {ButtonComponent} from "../common/button.component";
import {useStore} from "../../stores/show-task.store";
import {Task} from "../task/task.component";
import {TextInputComponent} from "../common/text-input.component";
import {useTextStore} from "../../stores/text.store";
import {useState} from "react";

export function TaskList() {
    const { tasks, addTask, removeAllTasks} = useStore();
    const {text, setText} = useTextStore();
    const [taskIdCounter, setTaskIdCounter] = useState(0);
    function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

    function createTask() {
        addTask({ id: taskIdCounter, name: text || 'My Task', description: 'My description', status: 'active' });
        setTaskIdCounter(taskIdCounter + 1);
    }

    return (
        <TaskContainer>
            <h1>Task List</h1>
            <TextInputComponent title={'Enter your name'} text={text} onTextChange={handleTextChange}/>
            <ButtonComponent title={'Add Task'} bgColor={'#DCEDC8'} color={'#212121'} onClick = {createTask}/>
            <ButtonComponent title={'Remove All Tasks'} bgColor={'#BDBDBD'} color={'#212121'} onClick={removeAllTasks}/>
            {tasks.map((task, index) => (
                // For each task, we render a Task component
                <Task key={index} task={task}/>
            ))}
        </TaskContainer>
    )
}

const TaskContainer = styled.div`
    background-color: #f4f4f4;
    padding: 40px;
    margin: 20px 0;
    border-radius: 30px;
    box-shadow: 0 2px 6px rgba(0,0,0,.1);
`;
