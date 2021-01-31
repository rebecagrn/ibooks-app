import styled from 'styled-components';

export const FavoriteCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  .favorite-card-item {
    padding: 20px;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    margin: 15px;
    width: 500px;
    flex-direction: column;

    > div {
      flex-direction: column;
    }
  }
`;
