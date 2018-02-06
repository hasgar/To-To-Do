import React, { Component } from 'react';
import { Text, View, ImageBackground, Dimensions, Image } from 'react-native';
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




  render() {
    const {width, height} = Dimensions.get('window')
    return (
      <ImageBackground
    style={{ width: width, height: height}}
    source={require('../../resources/images/loginBackground.png')}>
    <View style={{justifyContent: 'space-between', flex: 1, marginBottom: 20, marginTop: 40}}>
      
      <Card>
        <CardSection style={{alignItems: 'center', flexDirection: 'column'}}>
          <Image source={require('../../resources/images/logo.png')} />
        </CardSection>
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
          <Button onPress={() => this.props.navigation.navigate('Signup')} >
            Create Account
          </Button>
        </CardSection>
      </Card>
      
      </View>
      </ImageBackground>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  bg: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }
};

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.login;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  loginFormUpdate, loginUser
})(Login);
