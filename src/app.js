import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBefoeUhEhxPTvk8oMTe-jM0-1RxF8_guY',
      authDomain: 'react-native-manager-90658.firebaseapp.com',
      databaseURL: 'https://react-native-manager-90658.firebaseio.com',
      projectId: 'react-native-manager-90658',
      storageBucket: 'react-native-manager-90658.appspot.com',
      messagingSenderId: '835730573875'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
