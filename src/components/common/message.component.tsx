import styled from "styled-components";
import {ChangeEvent} from "react";
import {useTextStore} from "../../stores/text.store.ts";


interface MessageComponentProps {
    title: string;
}

export function MessageComponent (props: MessageComponentProps) {
    const {text, setText} = useTextStore();
    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value);
    };

    return (
        <MessageContainer>
            <h1>{props.title}</h1>
            <input type="text" value={text} onChange={handleTextChange} />
        </MessageContainer>
    )
}

const MessageContainer = styled.div`
  background-color: #805AD5; // используем более яркий оттенок пурпурного
  padding: 30px;
  margin-bottom: 10px;
  border-radius: 30px;
  box-shadow: 0 2px 6px rgba(0,0,0,.1);
`;
