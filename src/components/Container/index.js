import styled from 'styled-components';

const Container = styled.div`
  max-width: 80%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export default Container;
