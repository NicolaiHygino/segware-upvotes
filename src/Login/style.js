import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px;
  max-width: 500px;
  height: auto;
  border: 1px solid #dee0e1;
  border-radius: 5px;
  background-color: white;
  margin: 10px;
`;

export const InputWrapper = styled.div`
  width: 80%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dee0e1;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #ededed;
  border: 0;
  border-radius: 32px;
  padding: .5em 1em; 
  cursor: pointer;
`;
