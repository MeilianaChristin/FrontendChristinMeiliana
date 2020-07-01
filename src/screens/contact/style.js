import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 380,
    height: 120,
    marginTop: 40,
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 10,
    shadowColor: '#30C1DD',
    shadowRadius: 50,
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
    height: 100,
    width: 380,
  },
  avatar: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    marginTop: 10,
    marginLeft: 40,
  },
  viewName: {
    marginTop: 45,
    marginLeft: 5,
    paddingLeft: 40,
    flexDirection: 'row',
  },
  text: {fontWeight: 'bold', fontSize: 16, marginRight: 5},
});

export default styles;
