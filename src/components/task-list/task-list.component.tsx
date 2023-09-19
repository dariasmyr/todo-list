import styled from "styled-components";
import {ButtonComponent} from "../common/button.component.tsx";
import {useStore} from "../../stores/show-task.store.ts";
import {Task} from "../task/task.component.tsx";
import {TextInputComponent} from "../common/text-input.component.tsx";
import {useTextStore} from "../../stores/text.store.ts";

export function TaskList() {
    const { tasks, addTask, removeAllTasks } = useStore();
    const {text, setText} = useTextStore();

    function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

    return (
        <TaskContainer>
            <h1>Task List</h1>
            <TextInputComponent title={'Enter your credentials'} text={text} onTextChange={handleTextChange}/>
            <ButtonComponent title={'Add Task'} bgColor={'#DCEDC8'} color={'#212121'} onClick={() => addTask({ id: Math.random(), name: text || 'My Task', description: 'My description', status: 'active' })}/>
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
    margin: 20px 0; // увеличиваем отступы для лучшей визуальной разделенности
    border-radius: 30px; // уменьшаем радиус скругления для более современного вида
    box-shadow: 0 2px 6px rgba(0,0,0,.1); // добавляем тень для эффекта "парящего" блока
`;
