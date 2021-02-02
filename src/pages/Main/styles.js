import styled from 'styled-components';

export const MainTitle = styled.div`
  color: #5009ff;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 26px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    &::after {
      content: '';
      display: block;
      width: 100px;
      margin: 5px auto;
      height: 4px;
      background: currentColor;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 22px;
    }
  }
`;

export const Form = styled.form`
  margin: 30px 0;
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
    padding: 1rem;
    max-width: 22rem;
    min-height: 355px;
    background: #fff;
    box-shadow: 0 0 20px rgb(0 0 0 / 10%);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    transition: 0.3s ease-in;

    &:hover {
      transform: scale(1.03);
    }

    @media (max-width: 768px) {
      flex: 1 0 270px;
    }
  }

  img {
    max-width: 160px;
    min-width: 140px;
    max-height: 200px;
    display: block;
    object-fit: cover;
    margin: 0 auto;
    padding: 5px 8px;
  }
`;

export const CardFooter = styled.div`
  color: #4a4a4a;
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

  .footer-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .favorite-btn {
      display: flex;
      align-items: center;
      width: 50px;
      height: 23px;
      border-radius: 4px;

      svg {
        margin: 0 auto;
      }
    }
  }

  button {
    transition: 0.3s ease-in;

    &:hover {
      transform: scale(1.1);
    }

    &:disabled {
      svg {
        color: red !important;
      }
    }
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
  a {
    color: #5009ff;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;
