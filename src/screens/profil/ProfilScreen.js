import React, {Component} from 'react';
import {View, Item, Container, Content, Form, Label, Input} from 'native-base';
import {Image} from 'react-native';
import CommonHeader from '../../components/CommonHeader';

class ProfilScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <CommonHeader navigation={navigation} title="My Profil" />
        <Content>
          <Form>
            <Image
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                margin: 10,
                alignSelf: 'center',
              }}
              source={{
                uri:
                  'https://i1.wp.com/fin.co.id/wp-content/uploads/2020/02/bunga-camellia.png?fit=700%2C500&ssl=1',
              }}
            />
            <View style={{width: 380, padding: 18, margin: 20}}>
              <View style={{marginBottom: 15}}>
                <Item floatingLabel>
                  <Label>First Name</Label>
                  <Input
                    disabled
                    value="Christin"
                    onChangeText={value => this.onChange('firstName', value)}
                  />
                </Item>
              </View>
              <View style={{marginBottom: 15}}>
                <Item floatingLabel>
                  <Label>Last Name</Label>
                  <Input disabled value="Meiliana" />
                </Item>
              </View>
              <View style={{marginBottom: 15}}>
                <Item floatingLabel>
                  <Label>Age</Label>
                  <Input disabled value="23" />
                </Item>
              </View>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default ProfilScreen;
