import styled from "styled-components";


interface ButtonComponentProps {
    title: string;
    color?: string;
    bgColor?: string;
    onClick?: () => void;
}

export function ButtonComponent ({ title, onClick, color = 'black', bgColor = 'grey' }: ButtonComponentProps) {
        return (
            <ButtonContainer onClick={onClick} title={title} color={color} bgColor={bgColor}>
                <h3>{title}</h3>
            </ButtonContainer>
        )
    }

const ButtonContainer = styled.button<ButtonComponentProps>`
  background-color: ${({bgColor}) => bgColor || 'grey'};
  padding: 5px 10px;
  height: 30px;
  margin: 10px 0;
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,.1);
  color: ${({color}) => color || 'black'};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
