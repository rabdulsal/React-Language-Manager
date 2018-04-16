import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        // Username
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
          />

        </CardSection>


        // Password
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="12345"
          />
        </CardSection>

        // Login Button
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
