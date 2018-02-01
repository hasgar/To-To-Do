import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loginFormUpdate, signupUser } from './actions';
import { Card, CardSection, Input, Button, Spinner } from '../common';

class Signup extends Component {
  
  onSignupButtonPress() {
    const { email, password, navigation } = this.props;

    this.props.signupUser({ email, password, navigation  });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onSignupButtonPress.bind(this)}>
        Register
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <Text style={styles.errorTextStyle}>
        {this.props.error}
      </Text>
      )
    }
  }

  render() {
    return (
      <View style={{justifyContent: 'space-between', flex: 1}}>
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={value => this.props.loginFormUpdate({ prop: 'email', value })}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={value => this.props.loginFormUpdate({ prop: 'password', value })}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <Button onPress={() => this.props.navigation.goBack(null)}>
            Login
          </Button>
        </CardSection>
      </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({signup}) => {
  const { email, password, error, loading } = signup;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  loginFormUpdate, signupUser
})(Signup);
