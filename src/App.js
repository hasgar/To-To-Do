import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import MainStack from './components/Navigators/MainStack';


export default class App extends Component<{}> {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCTL9EgATfhGnheKsFLsSASzb8w4iv8x8Q",
      authDomain: "to-to-do-5e2b6.firebaseapp.com",
      databaseURL: "https://to-to-do-5e2b6.firebaseio.com",
      projectId: "to-to-do-5e2b6",
      storageBucket: "to-to-do-5e2b6.appspot.com",
      messagingSenderId: "1039943656470"
    }

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <MainStack />
      </Provider>
    );
  }
}


