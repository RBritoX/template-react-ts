---
name: 'page'
description: 'Page template'
message: 'Please enter the name of page to be created'
root: './src/pages'
output: '**/*'
ignore: []
---

# `{{ input | pascal }}/index.tsx`

```jsx
import React from 'react';

import * as S from './styles';

interface Props {}

export const {{ input | pascal }}: React.FC<Props> = (): JSX.Element => {
  return (
    <S.Container>
      <h1>{{ input | pascal }}</h1>
    </S.Container>
  );
};

```

# `{{ input | pascal }}/styles.ts`

```js
import styled from 'styled-components';

export const Container = styled.div``;

```
