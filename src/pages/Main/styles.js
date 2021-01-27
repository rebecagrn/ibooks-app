import styled from 'styled-components';

export const MainTitle = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 26px;
  flex-direction: row;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

    transition: border 0.25s ease-out;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #00a8ff;
  padding: 0 15px;
  border: 0;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0;
  }
`;
