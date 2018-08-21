import React from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configStore from './src/redux/Store';

import FirstApp from './src/FirstApp';

export default class App extends React.Component {

  render() {
    const { persistor, store } = configStore();
    return (
      <Provider store={store} >
        <PersistGate loading={<AppLoading />} persistor={persistor}>
          <FirstApp />
        </PersistGate>
      </Provider>
    );
  }
}
