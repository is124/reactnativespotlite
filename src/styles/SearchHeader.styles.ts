import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 12,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  logoText: {
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'Georgia',
    color: '#000',
  },
  subText: {
    fontSize: 13,
    fontFamily: 'Georgia',
    color: '#444',
    marginTop: 2,
  },
  iconButton: {
    padding: 8,
  },
});

export default styles;
