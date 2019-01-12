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
        <Button color={cosmoBlue} onClick={incrementCounter} backgroundColor={kiteWhite}>
          +
        </Button>
        <Button color={cosmoBlue} onClick={resetCounter} backgroundColor={kiteWhite}>
          Reset
        </Button>
      </CardContainer>
    </Fragment>
);

export { AppLayout };
