import React from 'react';

import { storiesOf } from '@storybook/react';

import { Label } from '../../index'

storiesOf('Label', module)
    .add('default', () => <Label>No props were passed here!</Label>)
    .add('with props', () => <Label color="red">Props were passed here!</Label>);
