import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StatusBar} from 'react-native';
import {Button, Icon, Header, Title, Body, Left} from 'native-base';

class CommonHeader extends Component {
  onBackPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {hideLeftButton} = this.props;
    return (
      <Header style={{backgroundColor: '#FF8C00'}}>
        <View>
          <StatusBar backgroundColor="#FF8C00" />
        </View>
        {!hideLeftButton && (
          <Left>
            <Button transparent onPress={this.onBackPress}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
        )}
        <Body>
          <Title style={{marginLeft: 60}}>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}

CommonHeader.propTypes = {
  hideLeftButton: PropTypes.any,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
  title: PropTypes.any,
};

export default CommonHeader;
