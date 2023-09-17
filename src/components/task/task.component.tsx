import styled from "styled-components";
import {ButtonComponent} from "../common/button.component";
import {useStore} from "../../stores/show-message.store.ts";
import {MessageComponent} from "../common/message.component.tsx";

export type Task = {
    id: number;
    name: string;
    description: string;
    status: 'active' | 'completed';
};


export type TaskProps = {
    task: {
        id: number;
        name: string;
        description: string;
        status: string;
    };
};

export function Task({ task }: TaskProps) {
    const { showMessage, toggleMessage } = useStore();
    const onClick = () => {
        toggleMessage();
    }

    return (
        <TaskContainer>
            <h1>{task.name}</h1>
            <ButtonComponent title={'Describe Task'} onClick={onClick} bgColor={'red'} color={'white'}/>
            {showMessage && <MessageComponent title={'Task Description'} />}
        </TaskContainer>
    )
}


const TaskContainer = styled.div`
  background-color: #ffffff; // более светлый серый цвет
  padding: 40px;
  margin: 20px 0; // увеличиваем отступы для лучшей визуальной разделенности
  border-radius: 30px; // уменьшаем радиус скругления для более современного вида
  box-shadow: 0 2px 6px rgba(0,0,0,.1); // добавляем тень для эффекта "парящего" блока 
`;

