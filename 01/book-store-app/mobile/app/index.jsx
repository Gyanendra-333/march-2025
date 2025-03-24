import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuthStore } from '../store/authStore';
import { useEffect } from "react";

export default function Index() {

  const { user, token, checkAuth, logout } = useAuthStore();
  // console.log(user);
  // console.log(token);

  useEffect(() => {
    checkAuth();
  }, [])

  return (
    <View
      style={styles.container}>
      <Text style={styles.title}>{user?.userName}</Text>
      <Text style={styles.title}>{token ? `${user?.userName} is Logged in.` : "user not Logged in"}</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <Link href="/auth/signUp">SignUp</Link>
      <Link href="/auth">Login</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "green"
  }
});