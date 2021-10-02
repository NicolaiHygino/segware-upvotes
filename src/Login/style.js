import styled from "styled-components";
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
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

export const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #dee0e1;
  border-radius: 5px;
  background-color: white;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: .7em;
  color: #e74c3c;
`;

export const FieldWrapper = styled.div`
  width: 80%;
  min-height: 75px;
  margin-bottom: 20px;
`;

export const FormButtons = styled.div`
  width: 80%;
  display: flex;
  align-items: center;

  & p {
    font-size:.8em;
    padding-right: .5em;
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background-color: #ededed;
  border: 0;
  border-radius: 32px;
  padding: .5em 1em; 
  cursor: pointer;
`;


