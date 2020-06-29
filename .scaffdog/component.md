---
name: 'component'
description: 'Component template'
message: 'Please enter the name of component to be created'
root: './src/components'
output: '**/*'
ignore: []
---

# `{{ input | pascal }}/index.tsx`

```jsx
import React from 'react';

import * as S from './styles';

interface Props {}

const {{ input | pascal }}: React.FC<Props> = (): JSX.Element => {
  return (
    <S.Container>
      <h1>{{ input | pascal }}</h1>
    </S.Container>
  );
};

export default {{ input | pascal }};

```

# `{{ input | pascal }}/styles.ts`

```js
import styled from 'styled-components';

export const Container = styled.div``;

```
