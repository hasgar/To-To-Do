import React, { Component } from 'react';
import { Button, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Spinner  } from '../common';
import { formUpdate, createList  } from '../List/actions';

class ListCreate extends Component {
  
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onAddButtonPress.bind(this)} title='Add' />
    );
  }

  onAddButtonPress() {
    const { name } = this.props;
    if (name) {
      this.props.createList({ name  });
    } else {
      Alert.alert('Enter list name')
    }
    
  }

  render() {
    return (
     <Card>
        <CardSection>
        <TextInput
            placeholder="Grocery"
            onChangeText={value => this.props.formUpdate({ prop: 'name', value })}
            value={this.props.name}
            style={styles.inputStyle}
            autoCorrect={false}
        />
        <CardSection>
          {this.renderButton()}
        </CardSection>
        </CardSection>
      </Card>
    );
  }
} 

const mapStateToProps = ({ list }) => {
  const { name, error, loading } = list;

  return { name, error, loading };
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

export default connect(mapStateToProps, {
  formUpdate, createList
})(ListCreate);
