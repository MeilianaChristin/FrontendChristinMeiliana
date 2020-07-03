import React, {Component} from 'react';
import {save, findById} from '../../../actions/contact';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Item,
  Container,
  Content,
  Form,
  Label,
  Input,
  Button,
} from 'native-base';
import {Image} from 'react-native';
import CommonHeader from '../../../components/CommonHeader';
import ImagePicker from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from './../style';

class ContactScreen extends Component {
  constructor(props) {
    super(props);

    const {route} = this.props;
    this.state = {
      id: route.params?.id,
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
      error: null,
    };
  }

  componentDidMount() {
    const {id} = this.state;
    if (id) {
      this.props.findById(this.state.id);
    }
    this.setState({error: null});
  }

  componentDidUpdate(prevProps, prevState) {
    const {savedContact, saveError, data, error, navigation} = this.props;

    if (prevProps.data !== data) {
      this.setState({...data.data});
    } else if (prevProps.savedContact != savedContact) {
      navigation.goBack();
    } else if (error && prevProps.error !== error) {
      console.log(error);
    } else if (saveError && prevProps.saveError !== saveError) {
      console.log(error);
      this.setState({error: saveError});
    }
  }

  onChange = (name, value) => {
    this.setState({[name]: value});
  };

  onSubmit = () => {
    this.props.save(this.state);
  };

  onSelectImage = async () => {
    ImagePicker.showImagePicker(
      {noData: true, mediaType: 'photo'},
      response => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          this.setState({
            photo: response.uri,
          });
        }
      },
    );
  };

  render() {
    const {navigation, loading, saveError} = this.props;
    const {firstName, lastName, age, photo} = this.state;

    return (
      <Container>
        <CommonHeader navigation={navigation} title="Contact" />
        <View style={styles.viewContact}>
          {(!this.state.avatarSource && (
            <Image source={{uri: photo}} style={styles.imageContact} />
          )) || (
            <Image
              source={{
                uri: 'https://www.freeiconspng.com/uploads/no-image-icon-0.png',
              }}
              style={styles.imageContact}
              value={photo}
              onChangeText={response => this.onChange('photo', response)}
            />
          )}
          <Button onPress={this.onSelectImage} style={styles.buttonContact}>
            <FontAwesome name="camera" style={styles.iconCamera} />
          </Button>
        </View>
        <Content>
          <Form>
            <View style={{width: 380, padding: 18, margin: 20}}>
              <View style={{marginBottom: 15}}>
                <Item floatingLabel>
                  <Label>First Name</Label>
                  <Input
                    value={firstName}
                    onChangeText={value => this.onChange('firstName', value)}
                  />
                </Item>
              </View>
              <View style={{marginBottom: 15}}>
                <Item floatingLabel>
                  <Label>Last Name</Label>
                  <Input
                    value={lastName}
                    onChangeText={value => this.onChange('lastName', value)}
                    returnKeyType="next"
                  />
                </Item>
              </View>
              <View style={{marginBottom: 15}}>
                <Item floatingLabel>
                  <Label>Age</Label>
                  <Input
                    value={age.toString()}
                    onChangeText={value => this.onChange('age', value)}
                    keyboardType="numeric"
                    returnKeyType="next"
                  />
                </Item>
              </View>
              <View style={{marginBottom: 15}}>
                <Item floatingLabel>
                  <Label>Photo</Label>
                  <Input
                    value={photo}
                    onChangeText={value => this.onChange('photo', value)}
                    returnKeyType="done"
                  />
                </Item>
              </View>
            </View>
            <Button
              full
              onPress={this.onSubmit}
              disabled={loading}
              style={{width: 200, borderRadius: 25, alignSelf: 'center'}}>
              <Text>Save</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.contactById.data,
  loading: state.contactById.loading || state.savedContact.loading,
  error: state.contactById.loading,

  saveData: state.savedContact.data,
  saveError: state.savedContact.error,
});

const mapDispatchProps = {
  save,
  findById,
};

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(ContactScreen);
