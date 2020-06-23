---
name: 'component'
description: 'Component component template'
message: 'Please enter the name of component to be created'
root: './src/components'
output: '**/*'
ignore: []
---

# `{{ input | pascal }}/index.tsx`

```jsx
import React from 'react'

import * as S from './styles.ts'

interface Props {}

export const {{ input | pascal }} : React.FC<Props> = ():JSX.Element => {


  return (
    <S.Container>

    </S.Container>
    )
}

```

# `{{ input | pascal }}/{{ input | pascal }}.story.tsx`

```jsx
import React from 'react'
import { storiesOf } from '@storybook/react'
import { {{ input | pascal }} } from '~/components/{{ input | pascal }}'
import { withKnobs, boolean } from '@storybook/addon-knobs'

storiesOf('Components/{{ input | pascal }}', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      <{{ input | pascal }} />
    </div>
  ))

```

# `{{ input | pascal }}/styles.ts`

```js
import styled from 'styled-components';

export const Container = styled.div``;

```
