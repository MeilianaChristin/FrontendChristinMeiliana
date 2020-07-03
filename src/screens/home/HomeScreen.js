import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Container, Content, Text, Item, Header} from 'native-base';
import {View, Image, StatusBar, ImageBackground} from 'react-native';
import CommonHeader from '../../components/CommonHeader';

class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    const image = {
      uri:
        'https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png',
    };
    return (
      <Container style={{backgroundColor: '#FF8C00'}}>
        <StatusBar backgroundColor="#FF8C00" />
        <Content>
          <View
            style={{
              marginTop: 20,
              marginLeft: 80,
              backgroundColor: 'white',
              width: 350,
              height: 650,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
            }}>
            <Image
              source={image}
              style={{width: 280, height: 150, marginLeft: 40, marginTop: 50}}
            />
            <Text
              style={{
                color: '#FF8C00',
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 40,
                marginLeft: 85,
              }}>
              Contact App
            </Text>
            <Button
              style={{
                width: 180,
                height: 50,
                marginTop: 50,
                alignSelf: 'center',
                borderRadius: 20,
                backgroundColor: '#6c7a89',
              }}
              onPress={() => navigation.navigate('BottomTab')}>
              <Text style={{marginLeft: 55, fontWeight: 'bold'}}>Show</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default HomeScreen;
