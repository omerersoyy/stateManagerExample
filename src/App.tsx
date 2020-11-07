/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import MyButton from './components/MyButton'
import MyText from './components/MyText'
import Root from './components/Root'
import Store from './modules'
import { Counter } from './states/counter'

let store = new Store()
const counterState = new Counter("counter", { count: 0 })
store.addState(counterState)


const App: React.FC = () => {
  return (
    <Root>
      <MyText notifiy={true} state={store.getState("counter")}/>
      <MyButton name={"Press Me"} state={store.getState("counter")} />
    </Root>
  );
};

export default App;
