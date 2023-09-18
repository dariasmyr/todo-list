import styled from "styled-components";

interface MessageComponentProps {
    title: string;
    text: string;
    onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function MessageComponent (props: MessageComponentProps) {

    return (
        <MessageContainer>
            <h1>{props.title}</h1>
            <input type="text" value={props.text} onChange={props.onTextChange} />
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
