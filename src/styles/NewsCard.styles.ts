import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    marginBottom: 10,
  },
  body: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    gap: 20,
  },
  actionText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
