import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loginFormUpdate, loginUser } from './actions';
import { Card, CardSection, Input, Button, Spinner } from '../common';

class Login extends Component {

  onButtonPress() {
    const { email, password, navigation } = this.props;
    this.props.loginUser({ email, password, navigation });
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
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

  componentDidMount() {
    const { setParams } = this.props.navigation;
    setParams({AuthKey: this.props.navigation.state.key})
  } 

  render() {
    
    return (
      <View style={{justifyContent: 'space-between', flex: 1}}>
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
            onChangeText={value => this.props.loginFormUpdate({ prop: 'email', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.props.password}
            onChangeText={value => this.props.loginFormUpdate({ prop: 'password', value })}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderLoginButton()}
        </CardSection>
      </Card>
      <Card>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Signup')}>
            Create Account
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

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.login;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  loginFormUpdate, loginUser
})(Login);
