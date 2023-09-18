import styled from "styled-components";
import {ButtonComponent} from "../common/button.component.tsx";
import {useStore} from "../../stores/show-task.store.ts";
import {Task} from "../task/task.component.tsx";

export function TaskList() {
    const { tasks, addTask, removeAllTasks } = useStore();

    return (
        <TaskContainer>
            <h1>Task List</h1>
            <ButtonComponent title={'Add Task'} bgColor={'lightblue'} color={'black'} onClick={() => addTask({ id: 1, name: 'My Task', description: 'My description', status: 'active' })}/>
            <ButtonComponent title={'Remove All Tasks'} bgColor={'red'} color={'white'} onClick={removeAllTasks}/>
            {tasks.map((task, index) => (
                // For each task, we render a Task component
                <Task key={index} task={task}/>
            ))}
        </TaskContainer>
    )
}

const TaskContainer = styled.div`
    background-color: #f4f4f4; // более светлый серый цвет
    padding: 40px;
    margin: 20px 0; // увеличиваем отступы для лучшей визуальной разделенности
    border-radius: 30px; // уменьшаем радиус скругления для более современного вида
    box-shadow: 0 2px 6px rgba(0,0,0,.1); // добавляем тень для эффекта "парящего" блока
`;
