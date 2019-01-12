import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button } from '../../index'

storiesOf('Button', module)
    .add('default', () => <Button>Default state</Button>)
    .add('with props', () => (
        <Button color="red" backgroundColor="white" wide>
          Props passed
        </Button>
    ));
