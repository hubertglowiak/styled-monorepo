import React, { Fragment } from 'react';
import { Button, Header, CardContainer, Label, colors } from 'styled-layout';

const { cosmoBlue, kiteWhite } = colors;

const AppLayout = ({ counter, incrementCounter, resetCounter }) => (
    <Fragment>
      <Header backgroundColor={cosmoBlue} color={kiteWhite}>
        Click it!
      </Header>
      <CardContainer>
        <Label color={cosmoBlue}>
          You've clicked {counter} times.
        </Label>
        <Button color={cosmoBlue} onClick={incrementCounter}>
          +
        </Button>
        <Button color={cosmoBlue} onClick={resetCounter}>
          Reset
        </Button>
      </CardContainer>
    </Fragment>
);

export { AppLayout };
