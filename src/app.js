import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBefoeUhEhxPTvk8oMTe-jM0-1RxF8_guY",
      authDomain: "react-native-manager-90658.firebaseapp.com",
      databaseURL: "https://react-native-manager-90658.firebaseio.com",
      projectId: "react-native-manager-90658",
      storageBucket: "react-native-manager-90658.appspot.com",
      messagingSenderId: "835730573875"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
