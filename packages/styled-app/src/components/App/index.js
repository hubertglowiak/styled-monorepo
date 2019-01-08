import { compose, withState, withHandlers } from 'recompose';

import { AppLayout } from './layout';

const App = compose(
    withState('counter', 'setCounter', 0),
    withHandlers({
      incrementCounter: ({ setCounter }) => () => setCounter(counter => ++counter),
      resetCounter: ({ setCounter }) => () => setCounter(() => 0),
    }),
)(AppLayout);

export { App };
