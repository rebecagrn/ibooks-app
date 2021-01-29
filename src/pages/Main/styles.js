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
  background: #5009ff;
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
    flex: 1 0 25%;
    margin: 10px;
    max-width: 300px;
    min-height: 340px;
    background: #fff;
    box-shadow: 0 0 20px rgb(0 0 0 / 10%);
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      flex: 1 0 270px;
    }
  }

  img {
    max-width: 160px;
    min-width: 140px;
    display: block;
    object-fit: cover;
    margin: 10px auto;
    padding: 5px 8px;
  }
`;

export const CardFooter = styled.div`
  color: #292929;
  border-radius: 4px;
  border-top: 1px solid #f5f5f5;
  padding: 10px;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  h3 {
    font-size: 16px;
    line-height: 1.3;
    margin: 15 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 13px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const ReadMore = styled.div`
  margin-top: 15px;

  a {
    color: #5009ff;

    &:hover {
      opacity: 0.8;
    }
  }
`;
