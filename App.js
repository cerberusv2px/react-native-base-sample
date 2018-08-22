import React from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configStore from './src/redux/Store';

import { FontAssets } from './helpers'

import FirstApp from './src/FirstApp';
import { Promise } from 'rsvp';

export default class App extends React.Component {
  state = {
    isFontLoaded: false,
  };

  componentWillMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Promise.all(FontAssets);
    this.setState({ isFontLoaded: true });
  }

  render() {
    const { persistor, store } = configStore();

    if (!this.state.isFontLoaded) {
      return <AppLoading />;
    }

    return (
      <Provider store={store} >
        <PersistGate loading={<AppLoading />} persistor={persistor}>
          <FirstApp />
        </PersistGate>
      </Provider>
    );
  }
}
