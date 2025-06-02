import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
  button: { backgroundColor: '#FFD700', padding: 15, borderRadius: 8 },
  buttonText: { fontSize: 16, fontWeight: '600', textAlign: 'center' },
});

export default styles;