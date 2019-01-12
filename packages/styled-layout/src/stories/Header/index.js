import React from 'react';

import { storiesOf } from '@storybook/react';

import { Header } from '../../index'

storiesOf('Header', module)
    .add('default', () => <Header>Default state</Header>)
    .add('with props', () => (
        <Header color="white" backgroundColor="orange">
          Props passed
        </Header>
    ));
