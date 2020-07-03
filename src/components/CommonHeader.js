import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StatusBar} from 'react-native';
import {Button, Icon, Header, Title, Body, Left} from 'native-base';
import styles from './style';

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
            <Button
              style={{width: 55, height: 40, backgroundColor: 'white'}}
              transparent
              onPress={this.onBackPress}>
              <Icon style={styles.icon} name="ios-arrow-back" />
            </Button>
          </Left>
        )}
        <Body>
          <Title style={{marginLeft: 50, fontWeight: 'bold'}}>
            {this.props.title}
          </Title>
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
