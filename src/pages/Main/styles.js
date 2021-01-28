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

export const BookCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .card-item {
    flex: 1 0 20%;
    margin: 10px;
    min-height: 230px;
    background: #f1f1f1;
    border-radius: 10px;
  }

  img {
    display: block;
    margin: 0 auto;
    padding: 5px 8px;
  }
`;