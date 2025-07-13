import { Link } from "expo-router";
import { Text, View } from "react-native";
import About  from "./about";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color: "blue"}}>Hello Shreya wassup
      </Text>
             <Link href={"/about"}>About</Link>
    </View>
  );
}
