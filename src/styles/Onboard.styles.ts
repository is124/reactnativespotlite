import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    map: {
      width: '105%',
      height: '50%',
      marginBottom: 30,
      opacity: 0.5,
      borderRadius: 12,
      resizeMode: 'cover'
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      color: '#000000',
      marginBottom: 30,
      fontFamily: 'Georgia'
    },
    button: {
      backgroundColor: '#000000',
      marginTop: 20,
      paddingVertical: 14,
      paddingHorizontal: 40,
      borderRadius: 8,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
  });

export default styles;