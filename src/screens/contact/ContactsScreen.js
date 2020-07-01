import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container} from 'native-base';
import {View, RefreshControl, Text, Image, ScrollView} from 'react-native';
import CommonHeader from '../../components/CommonHeader';
import {Card, Avatar} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {SwipeListView} from 'react-native-swipe-list-view';
import {connect} from 'react-redux';
import {findAll} from '../../actions/contact';
import styles from './style';

function Contact({onPress, contact}) {
  return (
    <View>
      <Card style={styles.card}>
        <View style={styles.view}>
          <Avatar.Image
            source={{
              uri: '{contact.photo}',
            }}
            style={styles.avatar}
            size={80}
          />

          <View style={styles.viewName}>
            <Text style={styles.text}>{contact.firstName}</Text>
            <Text style={styles.text}>{contact.lastName}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

class ContactScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.reload();
  }

  componentDidUpdate(prevProps) {
    const {data, error} = this.props;
    console.log('data', data);

    if (prevProps.data !== data) {
      this.setState({
        data: data,
      });
    } else if (error && prevProps.error !== error) {
      console.log(error);
    }
  }

  reload() {
    this.props.findAll();
  }

  onRefresh() {
    this.reload();
  }

  render() {
    const {loading, navigation} = this.props;
    const {data} = this.state;

    return (
      // <ScrollView>
      //   <SwipeListView
      //     refreshControl={
      //       <RefreshControl refreshing={loading} onRefresh={this.onRefresh} />
      //     }
      //     data={data}
      //     renderItem={({item}) => (
      //       <Contact onPress={this.onShowForm} contact={item} />
      //     )}
      //     rightOpenValue={-75}
      //     keyExtractor={contact => contact.id.toString()}
      //   />
      // </ScrollView>

      <View>
        <CommonHeader style={navigation} title="Contact" />
        <Card style={styles.card}>
          <View style={styles.view}>
            <Avatar.Image
              source={{
                uri:
                  'https://www.moma.org/d/p/sa/eleey_peter_peterrossphotocrop_3.jpg',
              }}
              style={styles.avatar}
              size={80}
            />

            <View style={styles.viewName}>
              <Text style={styles.text}>Peter</Text>
              <Text style={styles.text}>Martin</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.shape({
    age: PropTypes.any,
    firstName: PropTypes.any,
    lastName: PropTypes.any,
    photo: PropTypes.any,
  }),
  onPress: PropTypes.func,
};

const mapStateToProps = state => ({
  data: state.contacts.data,
  loading: state.contacts.loading,
  error: state.contacts.error,
});

const mapDispatchProps = {
  findAll,
};

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(ContactScreen);
