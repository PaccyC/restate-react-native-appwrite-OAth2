import { Link } from "expo-router";
import {  View } from "react-native";


export default function HomeScreen() {
  return (
    <View className="w-full h-full flex items-center justify-center font-rubik-extrabold">
      <Link  href="/(auth)/sign-in">Sign In</Link>
      <Link  href="/(root)/(tabs)/explore">Explore</Link>
      <Link  href="/(root)/(tabs)/profile">Profile</Link>
      <Link  href="/properties/1">Sign In</Link>
    </View>
  );
}

