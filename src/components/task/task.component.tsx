import styled from "styled-components";
import {ButtonComponent} from "../common/button.component";
import {TextInputComponent} from "../common/text-input.component.tsx";
import {useState} from "react";

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
    const [showTaskDescription, setTaskDescription] = useState(false);
    const [showTasks, setTasks] = useState(false);
    const [messageText, setMessageText] = useState("");
    const [savedText, setSavedText] = useState<Array<string>>([]);
    const [isDone, setIsDone] = useState(false);
    const onClick = () => {
        setTaskDescription(!showTaskDescription);
        setTasks(!showTasks);
    }

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setMessageText(event.target.value);
    };

    const handleSave = () => {
        setSavedText([...savedText, messageText]);
    };

    const handleClickDone = () => {
        setIsDone(true);
    }

    const handleClickUndone = () => {
        setIsDone(false);
    }

    return (
        <TaskContainer isDone={isDone}>
            <h1>{task.name}</h1>
            {!isDone && <ButtonComponent title={'Describe Task'} onClick={onClick} bgColor={'#32a852'} color={'white'}/>}
            {!isDone && showTaskDescription && <TextInputComponent title={'Task Description'} text={messageText} onTextChange={handleTextChange} />}
            {!isDone && <ButtonComponent title={'Save'} onClick={handleSave} bgColor={'#273c75'} color={'white'}/>}
            <ButtonComponent title={'Done'} onClick={handleClickDone} bgColor={'#fbc531'} color={'black'}/>
            {isDone && <ButtonComponent title={'Reopen'} onClick={handleClickUndone} bgColor={'#833471'} color={'white'}/>}
            { showTasks && <><p>Tasks:</p>
                <ul>
                    {savedText.map((text, index) => <li key={index}>{text}</li>
                    )}
                </ul>
            </> }
        </TaskContainer>
    )
}


const TaskContainer = styled.div<{ isDone: boolean }>`
  background-color: ${props => props.isDone ? '#82a2d2' : '#fff'};
  padding: 40px;
  margin: 20px 0; // увеличиваем отступы для лучшей визуальной разделенности
  border-radius: 30px; // уменьшаем радиус скругления для более современного вида
  box-shadow: 0 2px 6px rgba(0,0,0,.1); // добавляем тень для эффекта "парящего" блока 
`;

