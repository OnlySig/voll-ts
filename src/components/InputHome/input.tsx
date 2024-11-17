import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 3px 4px 7px 0px rgba(0, 0, 0, 0.3);

  border-radius: 16px;

  button {
    padding: 16px;
    border-radius: 16px 0 0 16px;
    background-color: #ededed;
    width: 56px;
    height: 52px;
    border: none;
    cursor: pointer;
  }
`;
const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  margin: 0px 20px;
  border: none;
  color: #686565;
  outline: none;
`;

interface IProps {
  icon: ReactNode;
  placeholder: string;
}

const InputHome = ({ icon, placeholder }: IProps) => {
  return (
    <Container>
      <button>{icon}</button>
      <StyledInput placeholder={placeholder} />
    </Container>
  );
};

export default InputHome;
