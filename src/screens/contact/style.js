import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 380,
    height: 80,
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 15,
    shadowColor: '#30C1DD',
    shadowRadius: 20,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 4,
    },
  },
  view: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingRight: 60,
    height: 80,
    width: 380,
    paddingBottom: 10,
  },
  avatar: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    marginTop: 10,
    marginLeft: 40,
  },
  viewName: {
    marginTop: 40,
    marginLeft: 20,
    paddingLeft: 40,
    flexDirection: 'row',
  },
  text: {fontWeight: 'bold', fontSize: 16, marginRight: 5, marginTop: -15},
  add: {
    backgroundColor: '#FF8C00',
  },
  searchText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 12,
  },
  viewContact: {
    flexDirection: 'row',
    marginLeft: 110,
    marginTop: 20,
  },
  imageContact: {
    width: 110,
    height: 110,
    borderRadius: 65,
    marginTop: 10,
    marginLeft: 40,
    borderWidth: 5,
    borderColor: 'black',
    alignSelf: 'center',
  },
  buttonContact: {
    marginTop: 112,
    marginLeft: -30,
    backgroundColor: 'white',
  },
  iconCamera:{
    fontSize: 28
  }
});

export default styles;
