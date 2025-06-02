import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  heading: {
    fontSize: 26,
    fontFamily: 'Georgia',
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'left',
  },
  section: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    fontFamily: 'Georgia',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    margin: 6,
  },
  selected: {
    backgroundColor: '#E5E5E5',
    borderColor: '#000',
  },
  tagText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    alignSelf: 'stretch',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default styles;
