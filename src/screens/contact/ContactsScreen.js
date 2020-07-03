import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Fab, Icon, Item, Input, Button} from 'native-base';
import {View, RefreshControl, Text, Image, ScrollView} from 'react-native';
import CommonHeader from '../../components/CommonHeader';
import {Card, Avatar} from 'react-native-paper';
import {SwipeListView} from 'react-native-swipe-list-view';
import {connect} from 'react-redux';
import {findAll} from '../../actions/contact';
import styles from './style';

function Contact({onPress, item}) {
  let photo = item.photo;
  if (photo == 'N/A') {
    photo = 'https://www.freeiconspng.com/uploads/no-image-icon-0.png';
  }
  return (
    <View>
      <Card style={styles.card} onPress={() => onPress(item)}>
        <View style={styles.view}>
          <Avatar.Image
            source={{
              uri: photo,
            }}
            style={styles.avatar}
            size={60}
          />

          <View style={styles.viewName}>
            <Text style={styles.text}>{item.firstName}</Text>
            <Text style={styles.text}>{item.lastName}</Text>
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
      search: '',
      params: {
        sort: 'asc',
        page: 0,
        search: '',
      },
    };
  }

  componentDidMount() {
    this.reload();
  }

  componentDidUpdate(prevProps) {
    const {data, error} = this.props;
    console.log('data', data);

    if (prevProps.data !== data) {
      this.setState({data: data});
    } else if (prevProps.data !== data) {
      this.reload();
    } else if (error && prevProps.error !== error) {
      console.log(error);
    }
  }

  reload({sort = 'asc', page = 0} = {}) {
    this.props.findAll({sort, page});
  }

  onRefresh = () => {
    const {params} = this.state;
    this.setState(
      {
        data: [],
        params: {...params, page: 0},
      },
      () => this.reload(this.state.params),
    );
  };

  onAdd = () => {
    this.props.navigation.push('Contact');
  };

  onShowForm = item => {
    this.props.navigation.navigate('Contact', item ? {id: item.id} : null);
  };

  onSearch = () => {
    const {search, params} = this.state;
    this.setState(
      {
        data: [],
        params: {...params, search: search, page: 0},
      },
      () => this.reload(this.state.params),
    );
  };

  render() {
    const {loading, navigation} = this.props;
    const {data, search} = this.state;

    return (
      <Container>
        <CommonHeader navigation={navigation} title="Contacts" />
        <Item style={styles.search}>
          <Input
            style={styles.searchText}
            value={search}
            placeholder="Search"
            onChangeText={search => this.setState({search})}
          />
          <Button transparent onPress={this.onSearch}>
            <Icon style={styles.icon} name="search" />
          </Button>
        </Item>
        <ScrollView>
          <SwipeListView
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={this.onRefresh} />
            }
            data={data.data}
            renderItem={({item, index}) => (
              <Contact onPress={this.onShowForm} item={item} index={index} />
            )}
            rightOpenValue={-75}
            keyExtractor={contact => contact.id.toString()}
          />
        </ScrollView>
        <Fab style={styles.add} onPress={this.onAdd}>
          <Icon name="add" />
        </Fab>
      </Container>
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
