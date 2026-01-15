import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  desc: {
    color: '#666',
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
});
