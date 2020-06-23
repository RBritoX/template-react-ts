import React from 'react';

import * as S from './styles';

import Button from '~/components/Button';

const Home: React.FC = () => {
  return (
    <S.Container>
      <h1>Hello React!</h1>
      <Button />
    </S.Container>
  );
};

export default Home;
