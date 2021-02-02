import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from './styles';

export default function ButtonDefault() {
  let history = useHistory();

  const previousRoute = () => {
    history.goBack();
  };

  return (
    <Button type="button" onClick={previousRoute}>
      Voltar
    </Button>
  );
}
